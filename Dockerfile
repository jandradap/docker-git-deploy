FROM node:5.10.0

ENV NODE_ENV production

RUN mkdir -p \
    /srv \
    /etc/ssl/private \
    /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

ENTRYPOINT ["npm"]

CMD ["start"]

EXPOSE 443

VOLUME /srv
