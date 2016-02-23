FROM node:5.6.0

EXPOSE 443
VOLUME /srv

ENV NODE_ENV production

RUN mkdir -p \
    /usr/src/app \
    /srv \
    /etc/ssl/private

WORKDIR /usr/src/app

COPY package.json \
     npm-shrinkwrap.json \
     index.js \
     lib/server.js \
     lib/deploy.js \
     /usr/src/app/

RUN npm install

CMD ["npm", "start"]
