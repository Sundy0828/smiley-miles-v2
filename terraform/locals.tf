locals {
  app_name    = "Smiley Miles"
  bucket_name = "smiley-miles"

  mime_types = {
    "html" = "text/html"
    "css"  = "text/css"
    "js"   = "application/javascript"
    "png"  = "image/png"
    "jpg"  = "image/jpeg"
    "svg"  = "image/svg+xml"
  }
}
