FROM node:lts-alpine

RUN apk add --no-cache bash && npm install -g @nestjs/cli

WORKDIR /home/node/app

# Copiar o build e node_modules gerado localmente
COPY . .
COPY node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
