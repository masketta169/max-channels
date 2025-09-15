# Build Stage
FROM node:22-slim AS builder

WORKDIR /app

# Устанавливаем Yarn
RUN apt-get update && apt-get install -y curl && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

# Копируем файлы зависимостей
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем весь проект
COPY . .

# Собираем проект
RUN yarn build

# Production Stage
FROM node:22-slim AS production

WORKDIR /app

# Устанавливаем зависимости для production если нужны
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Копируем только собранное приложение
COPY --from=builder /app/.output ./

# Настраиваем переменные окружения
ENV PORT=80
ENV HOST=0.0.0.0
ENV NODE_ENV=production

EXPOSE 80

# Запускаем приложение
CMD ["node", "/app/server/index.mjs"]