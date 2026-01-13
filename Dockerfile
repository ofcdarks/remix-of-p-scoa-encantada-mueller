# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Show build info
RUN echo "=== Starting Build ===" && \
    echo "Node version: $(node -v)" && \
    echo "NPM version: $(npm -v)"

# Copy package files
COPY package*.json ./

# Install dependencies with verbose logging
RUN echo "=== Installing Dependencies ===" && \
    npm ci --legacy-peer-deps && \
    echo "=== Dependencies Installed Successfully ==="

# Copy source code
COPY . .

# List files to verify copy
RUN echo "=== Files in /app ===" && ls -la

# Build the app with verbose output
RUN echo "=== Starting Vite Build ===" && \
    npm run build && \
    echo "=== Build Completed ===" && \
    echo "=== Files in /app/dist ===" && \
    ls -la dist/

# Production stage
FROM nginx:alpine AS production

# Show nginx info
RUN echo "=== Nginx version ===" && nginx -v

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Verify nginx config
RUN echo "=== Testing Nginx Config ===" && nginx -t

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# List deployed files
RUN echo "=== Deployed Files ===" && ls -la /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
