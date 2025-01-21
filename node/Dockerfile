# Usar a imagem oficial do Node.js
FROM node:18

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]