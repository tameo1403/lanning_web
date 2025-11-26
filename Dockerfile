FROM node:22-slim AS builder
WORKDIR /app

# Copy chỉ package.json + package-lock.json
COPY package.json package-lock.json ./

# Cài build tools cần thiết
RUN apt-get update && apt-get install -y python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Cài dependencies trước
RUN npm ci --jobs=1

# Copy toàn bộ source code
COPY . .

# Build Next.js
RUN npm run build
