FROM node:14-alpine

WORKDIR /repo

ADD package.json /repo
ADD yarn.lock /repo

RUN yarn

ADD . /repo

RUN yarn build
