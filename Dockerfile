FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY . .
# npm i вместо npm ci, т.к. package-lock.json в вашем локальном проекте мог быть вами перезаписан
RUN npm i --omit-dev
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

CMD [ "node", "dist/main.js" ]