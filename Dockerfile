# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
ENV NODE_ENV=production
RUN npm run build || (echo "Build failed" && exit 1)

# Try static export if available; fallback creates minimal out dir
RUN npm run export || (mkdir -p out && cp -r public/* out/ 2>/dev/null || true)

# Runtime stage
FROM node:18-alpine
WORKDIR /app
RUN npm i -g serve

# Copy exported static site
COPY --from=build /app/out ./out

EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]
