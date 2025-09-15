# --- build ---
FROM node:20 AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# --- production ---
FROM node:20 AS production

WORKDIR /app

# Копируем готовые node_modules и .output
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.output ./.output
COPY package.json yarn.lock ./

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
