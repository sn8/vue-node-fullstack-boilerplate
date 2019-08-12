# build stage
FROM node:11-alpine as build
ENV NODE_ENV=production
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

# production stage
FROM izonder/anny:12 as production
WORKDIR /app
COPY ./nginx/default.conf /etc/nginx/conf.d/
COPY --from=build /app/client/dist /usr/share/nginx/html
COPY --from=build /app/server/dist ./
CMD ["node", "index.js"]