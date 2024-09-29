import boto3
import os

def handler(event, context):
    s3 = boto3.client('s3')
    cloudfront = boto3.client('cloudfront')

    # Delete CloudFront distribution
    distribution_id = os.environ['CLOUDFRONT_ID']
    cloudfront.delete_distribution(Id=distribution_id, IfMatch='ETAG') # Use the correct ETag

    # Delete S3 bucket
    bucket_name = os.environ['S3_BUCKET_NAME']
    # First, delete all objects in the bucket
    objects = s3.list_objects_v2(Bucket=bucket_name)
    if 'Contents' in objects:
        s3.delete_objects(
            Bucket=bucket_name,
            Delete={'Objects': [{'Key': obj['Key']} for obj in objects['Contents']]}
        )
    # Finally, delete the bucket
    s3.delete_bucket(Bucket=bucket_name)
