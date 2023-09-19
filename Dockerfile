FROM node:20-alpine3.17

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start"]