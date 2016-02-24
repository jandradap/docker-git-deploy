FROM node:5.6.0

EXPOSE 443
VOLUME /srv

ENV NODE_ENV production

RUN mkdir -p \
    /usr/src/app \
    /srv \
    /etc/ssl/private

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

CMD ["npm", "start"]
