FROM node:16-alpine

WORKDIR /home/app

COPY package.json yarn.lock ./
RUN yarn install --immutable
COPY . .
RUN yarn build
RUN yarn install --production --immutable
CMD ts-node ./node_modules/.bin/typeorm schema:sync
