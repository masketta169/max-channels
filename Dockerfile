FROM node:20 AS builder

WORKDIR /app

# Включаем corepack и используем Yarn
RUN corepack enable

COPY package*.json ./
COPY yarn.lock ./

# Используем yarn для установки зависимостей
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:20-slim AS production

WORKDIR /app

COPY --from=builder /app/.output ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "./server/index.mjs"]