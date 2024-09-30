locals {
  app_name    = "Smiley Miles"
  branch_name = var.branch_name != "" ? var.branch_name : "master"
  bucket_name = "${local.branch_name}-smiley-miles"


  mime_types = {
    "html" = "text/html"
    "css"  = "text/css"
    "js"   = "application/javascript"
    "png"  = "image/png"
    "jpg"  = "image/jpeg"
    "svg"  = "image/svg+xml"
  }
}

# Define the variable
variable "branch_name" {
  type        = string
  description = "The name of the branch being deployed."
  default     = "" # Default can be set to an empty string
}
