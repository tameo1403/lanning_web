# ----------------------
# Stage 1: Build stage
# ----------------------
FROM node:22-slim AS builder

# Tạo thư mục làm việc
WORKDIR /app

# Copy chỉ package.json và lockfile để cache dependencies
COPY package.json pnpm-lock.yaml* ./

# Cài pnpm
RUN npm install -g pnpm

# Cài dependencies, giảm concurrency để tránh OOM
RUN pnpm install --frozen-lockfile --network-concurrency 1

# Copy toàn bộ source code
COPY . .

# Build project Next.js
RUN pnpm build

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
CMD ["pnpm", "start"]
