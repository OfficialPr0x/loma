# Coolify Deployment Guide

This guide explains how to deploy the Loma Beach Resort website to Coolify.

## Prerequisites

- A Coolify instance running and accessible
- A Git repository (GitHub, GitLab, or Gitea)
- Domain name configured (optional but recommended)

## Deployment Steps

### 1. Prepare Your Repository

Make sure all files are committed and pushed to your Git repository:

```bash
git add .
git commit -m "Add Docker deployment files"
git push
```

### 2. Deploy on Coolify

1. **Log into Coolify** and navigate to your project

2. **Create a New Resource**:
   - Click "New Resource"
   - Select "Docker Compose" or "Dockerfile" deployment

3. **Connect Your Repository**:
   - Select your Git provider (GitHub, GitLab, etc.)
   - Choose your repository
   - Select the branch (usually `main` or `master`)

4. **Configure Build Settings**:
   - **Build Pack**: Dockerfile
   - **Dockerfile Path**: `./Dockerfile` (default)
   - **Port**: `3000`
   - **Healthcheck**: Enabled (optional)

5. **Set Environment Variables** (if needed):
   - `NODE_ENV=production`
   - `PORT=3000` (usually handled automatically)
   - `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
   - Add any other variables from `env.example` as needed

6. **Configure Domain** (if you have one):
   - Add your domain (e.g., `lomabeachresort.com`)
   - Coolify will automatically configure SSL certificates

7. **Deploy**:
   - Click "Deploy" or "Save & Deploy"
   - Monitor the build logs
   - Wait for the deployment to complete

### 3. Post-Deployment

Once deployed, your application should be accessible at:
- Your custom domain (if configured)
- Or the Coolify-generated URL

## Environment Variables

Important environment variables to configure in Coolify:

### Required (if applicable):
- `NEXT_PUBLIC_SITE_URL` - Your production site URL
- `NEXT_PUBLIC_SITE_NAME` - Site name

### Optional:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` - For contact forms
- `DATABASE_URL` - If using a database
- `STRIPE_PUBLIC_KEY`, `STRIPE_SECRET_KEY` - For payments
- `GOOGLE_ANALYTICS_ID` - For analytics

See `env.example` for a complete list.

## Troubleshooting

### Build Fails
- Check build logs in Coolify
- Ensure all dependencies are in `package.json`
- Verify Node.js version (requires Node 18+)

### 404 Errors
- Verify the Dockerfile is correct
- Check that `next.config.js` has `output: 'standalone'`
- Ensure the build completes successfully

### Port Issues
- Default port is `3000`
- Coolify should handle port mapping automatically
- Check Coolify's port configuration

### Environment Variables Not Working
- Variables starting with `NEXT_PUBLIC_` are available in the browser
- Other variables are server-only
- Restart the application after adding variables

## Docker Commands (Local Testing)

Before deploying, you can test the Docker build locally:

```bash
# Build the image
docker build -t loma-beach-resort .

# Run the container
docker run -p 3000:3000 loma-beach-resort

# Or use docker-compose
docker-compose up
```

The application should be available at `http://localhost:3000`

## Notes

- The Dockerfile uses a multi-stage build for optimal image size
- The final image is based on Alpine Linux for minimal size
- The application runs as a non-root user for security
- Static assets are optimized during build
- The standalone output mode is enabled for efficient Docker builds

