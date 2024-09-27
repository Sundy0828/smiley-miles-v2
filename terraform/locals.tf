variable "base_bucket_name" {
  description = "The base name for the S3 bucket"
  type        = string
  default     = "smiley-miles"
}

locals {
  unique_bucket_name = "${var.base_bucket_name}-${random_string.bucket_suffix.result}"
  custom_domain      = "www.mycustomdomain.com" # Change to your custom domain
  tag_prefix         = "Smiley Miles"
}

resource "random_string" "bucket_suffix" {
  length  = 8
  special = false
}
