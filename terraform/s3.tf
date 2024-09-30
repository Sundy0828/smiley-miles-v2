data "aws_s3_bucket" "existing_bucket" {
  bucket = "${local.bucket_name}-bucket"
}

resource "aws_s3_bucket" "react_website" {
  count  = length(data.aws_s3_bucket.existing_bucket) == 0 ? 1 : 0
  bucket = "${local.bucket_name}-bucket"
}

locals {
  bucket = length(aws_s3_bucket.react_website) > 0 ? aws_s3_bucket.react_website[0] : data.aws_s3_bucket.existing_bucket
}


data "aws_cloudfront_distributions" "all" {}
locals {
  existing_distribution_id = [
    for distribution in data.aws_cloudfront_distributions.all.ids : distribution
    if contains(data.aws_cloudfront_distributions.all.items[distribution].origin, "${local.bucket.bucket_regional_domain_name}")
  ][0]
}

resource "aws_s3_object" "react_files" {
  for_each = fileset("${path.module}/build", "**")

  bucket       = local.bucket.id # Update to access the bucket via index
  key          = each.key
  source       = "${path.module}/build/${each.key}"
  etag         = filemd5("${path.module}/build/${each.key}")
  content_type = lookup(local.mime_types, each.key, "application/octet-stream")
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "OAI for ${local.app_name}"
}

resource "aws_cloudfront_distribution" "cdn" {
  count = local.existing_distribution_id != "" ? 0 : 1

  origin {
    domain_name = local.bucket.bucket_regional_domain_name # Update to access the bucket via index
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
  value      = local.bucket.bucket
  depends_on = [aws_s3_bucket.react_website]
}

output "cloudfront_id" {
  value      = aws_cloudfront_distribution.cdn.id
  depends_on = [aws_cloudfront_distribution.cdn]
}
