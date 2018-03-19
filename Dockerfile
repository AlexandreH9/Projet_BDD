FROM node:latest

COPY . /

WORKDIR /web

RUN npm install

RUN node app.js
