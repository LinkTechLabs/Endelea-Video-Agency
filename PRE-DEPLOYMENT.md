# Pre-Deployment Checklist

## Before pushing to main branch:

### 1. Local Build Test
```bash
./scripts/build-check.sh
```

### 2. Required GitHub Secrets
Make sure these are set in your GitHub repository:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION` (optional, defaults to us-east-1)
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

### 3. Environment Variables (Optional)
- `NODE_ENV` (will be set to production by build)
- `SITE_URL` (your production domain)

### 4. Final Checks
- [ ] All changes committed and pushed
- [ ] Local build succeeds
- [ ] Assets are optimized
- [ ] Links are working
- [ ] Forms are functional
- [ ] Responsive design tested

## Deployment Process

1. Push to main branch:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. Monitor deployment:
   - Go to Actions tab in GitHub
   - Watch the workflow run
   - Check for any errors

3. Post-deployment:
   - Visit your site
   - Clear browser cache if needed
   - Test all functionality

## Troubleshooting

### Build fails locally
- Check Node.js version (should be 20.x)
- Run `npm install` if dependencies are missing
- Check for TypeScript errors

### Deployment fails
- Verify AWS credentials in GitHub secrets
- Check S3 bucket permissions
- Ensure CloudFront distribution ID is correct

### Site not updating
- Check CloudFront invalidation completed
- Clear browser cache (Ctrl+Shift+R)
- Verify S3 files are updated

## Rollback Procedure

If something goes wrong:
1. Checkout previous commit:
   ```bash
   git checkout <previous-commit-hash>
   ```
2. Push to main:
   ```bash
   git push --force origin main
   ```
3. Monitor deployment

## Performance Tips

- Images are optimized by Astro
- CSS is minified
- JS is tree-shaken
- Assets have proper cache headers
- CloudFront CDN serves from edge locations
