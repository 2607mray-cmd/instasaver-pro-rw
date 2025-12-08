# Use Node.js 20 Alpine for smaller image size
FROM node:20-alpine

# Install Python3, pip, ffmpeg, and OpenSSL packages (required for Prisma + yt-dlp)
# Alpine uses apk. --no-cache keeps the image small.
RUN apk add --no-cache \
    python3 \
    py3-pip \
    ffmpeg \
    openssl \
    openssl-dev \
    openssl1.1-compat

# Install yt-dlp via pip (breaking system packages allowed in container)
RUN pip3 install yt-dlp --break-system-packages

# Create app directory
WORKDIR /app

# Copy package files first for caching (from backend directory)
COPY backend/package*.json ./
COPY backend/prisma ./prisma/

# Install dependencies (including devDeps for prisma generate)
RUN npm install

# Generate Prisma client
RUN npx prisma generate

# Copy source code (from backend directory)
COPY backend/ ./

# Set production environment
ENV NODE_ENV=production

# Expose port (Railway sets PORT env var)
EXPOSE 5000

# Start command
CMD ["npm", "start"]
