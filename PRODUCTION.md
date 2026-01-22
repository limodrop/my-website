# Production Build Configuration

This repository is configured for production Next.js deployment with the following setup:

## Dockerfile
- Single-stage build using node:18-alpine
- Installs dependencies with `npm install`
- Builds production assets with `npm run build`
- Runs production server with `npm start` on port 3000

## Package.json Scripts
- `build`: next build - Creates production build with .next/static assets
- `start`: next start -p 3000 - Runs production server

## GitHub Actions Workflow
- Automatically builds and pushes Docker images to GHCR
- Creates two tags: `latest` and `sha-{commit}`
- Uses proper GHCR authentication with GITHUB_TOKEN

## Image Location
- ghcr.io/limodrop/website-www:latest
- ghcr.io/limodrop/website-www:sha-{commit}

Ready for deployment on Sliplane or any Docker-based hosting platform.
