FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20 AS production

WORKDIR /app

COPY --from=builder /app/.output ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "./server/index.mjs"]