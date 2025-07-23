FROM ruby:3.4.5-alpine3.22

WORKDIR /box

COPY . .

RUN apk add --clean \
build-base \
vim \
bash \
yarn && \
bundle install && \
yarn install
