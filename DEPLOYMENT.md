# Endelea Agency - CI/CD Deployment Guide

## Overview
This project uses GitHub Actions for automated deployment to AWS S3 and CloudFront.

## Architecture
- **Hosting**: AWS S3 (static website hosting)
- **CDN**: AWS CloudFront (global distribution)
- **CI/CD**: GitHub Actions (automated builds and deployments)

## Setup Instructions

### 1. AWS Infrastructure Setup

Run the setup script to create your AWS resources:

```bash
# Make sure you have AWS CLI configured with appropriate permissions
aws configure

# Run the setup script
./infrastructure/setup-aws.sh
```

This will create:
- S3 bucket for hosting
- CloudFront distribution for CDN
- Proper bucket policies for public access

### 2. GitHub Repository Secrets

After running the setup script, add these secrets to your GitHub repository:

1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following secrets:

```
S3_BUCKET_NAME=your-bucket-name-here
CLOUDFRONT_DISTRIBUTION_ID=your-distribution-id-here
AWS_ROLE_ARN=arn:aws:iam::YOUR-ACCOUNT-ID:role/GitHubAction-Deploy
```

### 3. IAM Role for GitHub Actions

Create an IAM role that GitHub Actions can assume:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::YOUR-ACCOUNT-ID:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:YOUR-USERNAME/ai-agency:ref:refs/heads/main"
        }
      }
    }
  ]
}
```

Attach these policies to the role:
- `AmazonS3FullAccess`
- `CloudFrontFullAccess`

### 4. Deployment Process

The CI/CD pipeline triggers on:
- Push to `main` branch (full deployment)
- Pull requests to `main` (build only)

#### Build Stage
1. Checks out code
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the Astro site

#### Deploy Stage (main branch only)
1. Downloads build artifacts
2. Configures AWS credentials
3. Syncs files to S3
4. Invalidates CloudFront cache

## Manual Deployment

To deploy manually without triggering the pipeline:

```bash
# Build the site
npm run build

# Deploy to S3
aws s3 sync ./dist s3://YOUR-BUCKET-NAME --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id YOUR-DISTRIBUTION-ID --paths "/*"
```

## Environment Variables

The build process supports these environment variables:

- `NODE_ENV`: Set to `production` for production builds
- `SITE_URL`: Your production URL (for sitemaps, etc.)

## Troubleshooting

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check build logs in GitHub Actions

### Deployment Issues
- Verify AWS credentials and permissions
- Check S3 bucket policies
- Ensure CloudFront distribution is properly configured

### Cache Issues
- CloudFront cache is automatically invalidated on deployment
- For manual cache clearing, run the invalidation command
- Browser cache may require hard refresh (Ctrl+Shift+R)

## Rollback

To rollback to a previous version:

1. Checkout the desired commit:
   ```bash
   git checkout <commit-hash>
   ```

2. Deploy manually:
   ```bash
   npm run build
   aws s3 sync ./dist s3://YOUR-BUCKET-NAME --delete
   aws cloudfront create-invalidation --distribution-id YOUR-DISTRIBUTION-ID --paths "/*"
   ```

## Security Considerations

- S3 bucket is configured for public read access
- CloudFront enforces HTTPS
- GitHub Actions uses OIDC for authentication (no long-lived keys)
- Build artifacts are stored temporarily and cleaned up

## Performance Optimizations

- CloudFront edge caching
- Gzip compression enabled
- Static assets cached for 1 year
- HTML files set to no-cache for immediate updates

## Monitoring

- Monitor deployment status in GitHub Actions tab
- Check CloudFront metrics in AWS Console
- S3 access logs can be enabled if needed

## Costs

Expected monthly costs (varies by usage):
- S3 storage: ~$0.023 per GB
- S3 data transfer: ~$0.09 per GB (first 10GB/month free)
- CloudFront: ~$0.0075 per 10,000 requests
- Typically under $10/month for low-traffic sites
