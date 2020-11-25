FROM node:13.12.0-alpine
WORKDIR /app
COPY . /app
COPY package.json /app/package.json
RUN npm install
EXPOSE 8080
USER node
CMD ["node", "server.js"]