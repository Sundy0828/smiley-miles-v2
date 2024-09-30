data "aws_s3_bucket" "existing_bucket" {
  bucket = "${local.bucket_name}-bucket"
}

# Use a local-exec provisioner to store the output in a file
resource "null_resource" "check_existing_distribution" {
  provisioner "local-exec" {
    command = <<EOT
      aws cloudfront list-distributions --query "DistributionList.Items[?Origin[0].DomainName=='${data.aws_s3_bucket.existing_bucket.bucket_regional_domain_name}'].Id" --output text > distribution_id.txt || echo "" > distribution_id.txt
    EOT
  }

  triggers = {
    bucket_name = data.aws_s3_bucket.existing_bucket.id
  }
}

# Read the distribution ID from the file
data "local_file" "distribution_id" {
  filename = "${path.module}/distribution_id.txt"
}

resource "aws_s3_bucket" "react_website" {
  count  = length(data.aws_s3_bucket.existing_bucket) == 0 ? 1 : 0
  bucket = "${local.bucket_name}-bucket"
}

locals {
  bucket = length(aws_s3_bucket.react_website) > 0 ? aws_s3_bucket.react_website[0] : data.aws_s3_bucket.existing_bucket
}

resource "aws_s3_object" "react_files" {
  for_each = fileset("${path.module}/build", "**")

  bucket       = local.bucket.id
  key          = each.key
  source       = "${path.module}/build/${each.key}"
  etag         = filemd5("${path.module}/build/${each.key}")
  content_type = lookup(local.mime_types, each.key, "application/octet-stream")
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  count   = length(trimspace(data.local_file.distribution_id.content)) == 0 ? 1 : 0
  comment = "OAI for ${local.app_name}"
}

resource "aws_cloudfront_distribution" "cdn" {
  count = length(trimspace(data.local_file.distribution_id.content)) == 0 ? 1 : 0

  origin {
    domain_name = local.bucket.bucket_regional_domain_name
    origin_id   = "S3-${local.bucket_name}-bucket"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity[0].cloudfront_access_identity_path
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
  value      = length(trimspace(data.local_file.distribution_id.content)) > 0 ? trimspace(data.local_file.distribution_id.content) : aws_cloudfront_distribution.cdn[0].id
  depends_on = [aws_cloudfront_distribution.cdn]
}
