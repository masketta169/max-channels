# --- build ---
FROM node:20 AS build

WORKDIR /app

# копируем только package.json и yarn.lock
COPY package.json yarn.lock ./
# ставим зависимости под Linux
RUN yarn install --frozen-lockfile

# копируем исходники и собираем
COPY . .
RUN yarn build

# --- production ---
FROM node:20 AS production

WORKDIR /app

# копируем только нужное для запуска
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.output ./.output
COPY package.json yarn.lock ./

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
