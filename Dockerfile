FROM node:10.16.3

COPY package.json ./
COPY yarn.lock ./
COPY ./entrypoint.sh /entrypoint.sh

RUN npm i -g yarn

RUN yarn install

COPY . .

EXPOSE 3000

ENTRYPOINT ["bash", "/entrypoint.sh"]
