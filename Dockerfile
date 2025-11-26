# Chọn Node.js slim để nhẹ
FROM node:22-slim

# Thư mục làm việc trong container
WORKDIR /app

# Copy file package và install
COPY package*.json ./
RUN npm install --production

# Copy toàn bộ source code
COPY . .

# Build app
RUN npm run build

# Expose port app
EXPOSE 3000

# Command chạy app
CMD ["npm", "start"]
