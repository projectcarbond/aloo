FROM node:10.15.0-alpine

RUN mkdir -p /code
WORKDIR /code

COPY . ./
RUN yarn install --ignore-engines
