data "external" "check_bucket_exists" {
  program = ["bash", "-c", "aws s3 ls ${local.bucket_name}-bucket > /dev/null 2>&1 && echo -n '{\"result\":\"yes\"}' || echo -n '{\"result\":\"no\"}'"]
}

resource "null_resource" "delete_existing_bucket" {
  count = data.external.check_bucket_exists.result == "yes" ? 1 : 0

  provisioner "local-exec" {
    command = "aws s3 rb s3://${local.bucket_name}-bucket --force"
  }
}

resource "aws_s3_bucket" "react_website" {
  bucket = "${local.bucket_name}-bucket"
}

resource "aws_s3_object" "react_files" {
  for_each = fileset("${path.module}/build", "**")

  bucket       = aws_s3_bucket.react_website.id
  key          = each.key
  source       = "${path.module}/build/${each.key}"
  etag         = filemd5("${path.module}/build/${each.key}")
  content_type = lookup(local.mime_types, each.key, "application/octet-stream")
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "OAI for ${local.app_name}"
}

resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.react_website.bucket_regional_domain_name
    origin_id   = "S3-${local.bucket_name}-bucket"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${local.bucket_name}-bucket"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

output "bucket_name" {
  value      = aws_s3_bucket.react_website.bucket
  depends_on = [aws_s3_bucket.react_website]
}

output "cloudfront_url" {
  value      = aws_cloudfront_distribution.cdn.domain_name
  depends_on = [aws_cloudfront_distribution.cdn]
}
