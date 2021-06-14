FROM node:13.12.0-alpine as builder
WORKDIR /app
COPY . /app
COPY package.json /app/package.json
RUN npm install
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

