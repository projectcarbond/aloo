FROM node:10.15.0-alpine

RUN mkdir -p /code
WORKDIR /code

COPY . ./
RUN yarn global add pm2 && yarn install --ignore-engines
