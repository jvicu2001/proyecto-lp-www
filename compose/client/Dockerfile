FROM node:18-alpine

RUN npm install -g http-server

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

COPY jsconfig.json ./

COPY babel.config.js ./

COPY vue.config.js ./

COPY yarn.lock ./

RUN yarn install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist"]
