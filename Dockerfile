# Build Stage
FROM node:22-alpine AS builder
WORKDIR /app

# Очищаем кэш и устанавливаем
RUN npm cache clean --force

COPY package.json package-lock.json ./
RUN rm -rf node_modules && npm install

COPY . .
RUN npm run build

# Production Stage
FROM node:22-alpine AS production
WORKDIR /app

COPY --from=builder /app/.output ./

ENV PORT=3000
ENV HOST=0.0.0.0
ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "/app/server/index.mjs"]