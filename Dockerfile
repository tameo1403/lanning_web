# Dockerfile
FROM node:22-slim

# Thư mục làm việc trong container
WORKDIR /app

# Copy package và cài deps
COPY package*.json ./
RUN npm install --production

# Copy toàn bộ source
COPY . .

# Build Next.js
RUN npm run build

# Expose port mà Next.js chạy
EXPOSE 3000

# CMD chạy app
CMD ["npm", "start"]
