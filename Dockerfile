# --- Этап сборки ---
FROM node:20 AS build

# Рабочая директория
WORKDIR /app

# Установим зависимости
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Скопируем исходники и соберём
COPY . .
RUN yarn build

# --- Этап продакшн ---
FROM node:20 AS production

WORKDIR /app

# Установим только прод-зависимости (без devDependencies)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Скопируем сборку из предыдущего этапа
COPY --from=build /app/.output ./.output

# Открываем порт Nuxt-приложения (по умолчанию 3000)
EXPOSE 3000

# Запуск Nuxt
CMD ["node", ".output/server/index.mjs"]
