provider "aws" {
  region = "us-east-1" # ACM certificates for CloudFront must be in us-east-1
}

resource "random_string" "bucket_suffix" {
  length  = 8
  special = false
}

# Create an S3 bucket
resource "aws_s3_bucket" "website_bucket" {
  bucket = local.unique_bucket_name

  lifecycle {
    prevent_destroy = true
  }
}

# Set bucket policy for public access
resource "aws_s3_bucket_policy" "website_bucket_policy" {
  bucket = aws_s3_bucket.website_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.website_bucket.arn}/*"
      }
    ]
  })
}

# Upload build files to the S3 bucket
resource "aws_s3_object" "build_files" {
  for_each = fileset("${path.module}/build", "**/*") # Point to your build directory

  bucket = aws_s3_bucket.website_bucket.bucket
  key    = each.value
  source = "${path.module}/build/${each.value}"
}

# Create an SSL certificate
resource "aws_acm_certificate" "cert" {
  domain_name       = local.custom_domain
  validation_method = "DNS"

  tags = {
    Name = "${local.tag_prefix} Certificate"
  }
}

# Create DNS validation records
resource "aws_route53_record" "cert_validation" {
  count   = length(aws_acm_certificate.cert.domain_validation_options)
  zone_id = "<YOUR_ROUTE53_ZONE_ID>" # Change to your Route 53 hosted zone ID
  name    = aws_acm_certificate.cert.domain_validation_options[count.index].resource_record_name
  type    = aws_acm_certificate.cert.domain_validation_options[count.index].resource_record_type
  ttl     = 60
  records = [aws_acm_certificate.cert.domain_validation_options[count.index].resource_record_value]
}

# Create CloudFront distribution
resource "aws_cloudfront_distribution" "website_distribution" {
  origin {
    domain_name = aws_s3_bucket.website_bucket.website_endpoint
    origin_id   = "S3Origin"

    s3_origin_config {
      # Enable access logging if desired
      origin_access_identity = aws_cloudfront_origin_access_identity.s3_oai.id
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  # Set up SSL certificate
  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method  = "sni-only"
  }

  # Cache behavior
  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]

    target_origin_id = "S3Origin"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
  }

  # Add restrictions if necessary
  restrictions {
    geo_restriction {
      restriction_type = "none" # Set to "whitelist" or "blacklist" if needed
    }
  }

  price_class = "PriceClass_All"
}

# Outputs
output "cloudfront_url" {
  value = aws_cloudfront_distribution.website_distribution.domain_name
}

output "website_url" {
  value = aws_cloudfront_distribution.website_distribution.domain_name
}
