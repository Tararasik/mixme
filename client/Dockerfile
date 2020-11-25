FROM node:13.12.0-alpine as builder
WORKDIR /app
COPY . /app
COPY package.json /app/package.json
RUN npm install
RUN npm run build
