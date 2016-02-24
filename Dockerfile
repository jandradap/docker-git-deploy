FROM node:5.6.0

ENV NODE_ENV production

VOLUME /srv

RUN mkdir -p \
    /usr/src/app \
    /srv \
    /etc/ssl/private

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

CMD ["npm", "start"]

EXPOSE 443
