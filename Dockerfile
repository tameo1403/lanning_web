# ----------------------
# Stage 1: Build stage
# ----------------------
FROM node:22-slim AS builder

WORKDIR /app

# Copy package.json + package-lock.json để cache dependencies
COPY package.json package-lock.json ./

# Cài build tools cần thiết cho các package native
RUN apt-get update && apt-get install -y python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Cài dependencies bằng npm
RUN npm ci

# Copy toàn bộ source code
COPY . .

# Build Next.js
RUN npm run build

# ----------------------
# Stage 2: Production stage
# ----------------------
FROM node:22-slim AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy build output từ builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose port Next.js server
EXPOSE 3000

# Chạy Next.js production server
CMD ["npm", "start"]
