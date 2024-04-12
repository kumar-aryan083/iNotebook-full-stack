FROM node:20-alpine

WORKDIR /usr/src/app

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]