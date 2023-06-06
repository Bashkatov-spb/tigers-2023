FROM node:13

WORKDIR /application

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["node", "app.js"]