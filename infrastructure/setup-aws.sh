#!/bin/bash

# Endelea Agency AWS Infrastructure Setup Script
# This script sets up S3 bucket and CloudFront distribution for the website

# Configuration
BUCKET_NAME="endelea-agency-$(date +%s)"
REGION="us-east-1"

echo "Setting up AWS infrastructure for Endelea Agency..."
echo "Bucket will be created as: $BUCKET_NAME"

# Create S3 bucket
echo "Creating S3 bucket..."
aws s3api create-bucket \
    --bucket $BUCKET_NAME \
    --region $REGION

# Enable static website hosting
echo "Configuring static website hosting..."
aws s3 website $BUCKET_NAME \
    --index-document index.html \
    --error-document index.html

# Update bucket policy (replace placeholder in the policy file)
echo "Applying bucket policy..."
sed "s/YOUR-BUCKET-NAME-HERE/$BUCKET_NAME/g" infrastructure/s3-bucket-policy.json > /tmp/bucket-policy.json
aws s3api put-bucket-policy \
    --bucket $BUCKET_NAME \
    --policy file:///tmp/bucket-policy.json

# Create CloudFront distribution
echo "Creating CloudFront distribution..."
sed "s/YOUR-BUCKET-NAME-HERE/$BUCKET_NAME/g" infrastructure/cloudfront-distribution.json | \
sed "s/\${TIMESTAMP}/$(date +%s)/g" > /tmp/cloudfront-config.json

DISTRIBUTION_ID=$(aws cloudfront create-distribution \
    --distribution-config file:///tmp/cloudfront-config.json \
    --query 'Distribution.Id' \
    --output text)

echo "Setup complete!"
echo ""
echo "=== IMPORTANT: Save these values ==="
echo "S3 Bucket Name: $BUCKET_NAME"
echo "CloudFront Distribution ID: $DISTRIBUTION_ID"
echo ""
echo "Add these to your GitHub repository secrets:"
echo "S3_BUCKET_NAME=$BUCKET_NAME"
echo "CLOUDFRONT_DISTRIBUTION_ID=$DISTRIBUTION_ID"
echo ""
echo "Note: It may take 15-20 minutes for CloudFront to be fully deployed."
echo "You can check the status with: aws cloudfront get-distribution --id $DISTRIBUTION_ID"
