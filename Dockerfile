FROM node:5.11.0

ENV NODE_ENV production

RUN mkdir -p \
    /srv \
    /etc/ssl/private \
    /root/.ssh \
    /usr/src/app

WORKDIR /usr/src/app

COPY package.json \
     npm-shrinkwrap.json \
     /usr/src/app/

RUN npm install

COPY . /usr/src/app/

ENTRYPOINT ["npm"]

CMD ["start"]

EXPOSE 443

VOLUME /srv
