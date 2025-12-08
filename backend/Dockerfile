# Use Node.js 20 Debian Slim (better Prisma compatibility than Alpine)
FROM node:20-slim

# Install system dependencies for Prisma, Python, and yt-dlp
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    ffmpeg \
    openssl \
    libssl3 \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install yt-dlp
RUN pip3 install yt-dlp --break-system-packages

# Create app directory
WORKDIR /app

# Copy package files first for caching (from backend directory for monorepo)
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
