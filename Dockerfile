FROM node:20 AS builder

# Устанавливаем Yarn глобально
RUN npm install -g yarn

WORKDIR /app

# Копируем файлы, специфичные для Yarn
COPY package*.json ./
COPY yarn.lock ./

# Используем Yarn вместо npm
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:20-slim AS production

WORKDIR /app

COPY --from=builder /app/.output ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "./server/index.mjs"]