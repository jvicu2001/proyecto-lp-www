FROM node:18-alpine

RUN npm install -g http-server

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

COPY jsconfig.json ./

COPY yarn.lock ./

RUN yarn install

COPY public ./public

COPY src ./src

RUN yarn build

EXPOSE 8080

ENTRYPOINT ["http-server", "dist"]
