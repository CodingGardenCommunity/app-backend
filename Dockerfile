FROM node:10.16.3

WORKDIR /usr/src/app-backend

COPY package.json ./
COPY yarn.lock ./
COPY ./entrypoint.sh /entrypoint.sh

RUN npm i -g yarn

RUN yarn install

COPY . .

EXPOSE 3000

RUN cp .env.docker.sample .env

ENTRYPOINT ["bash", "/entrypoint.sh"]
