FROM node:5.7.0

ENV NODE_ENV production

VOLUME /srv

RUN mkdir -p \
    /srv \
    /etc/ssl/private \
    /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]

EXPOSE 443
