FROM node:18

RUN yarn add express express-graphql graphql --save

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["node", "server.js"]