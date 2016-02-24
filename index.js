'use strict'

const fs = require('fs')

const server = require('./lib/server.js')

const env = process.env.NODE_ENV || 'development'

let port
let certpath
let deploypath

if (env === 'production') {
  port = 443
  certpath = '/etc/ssl/private'
  deploypath = '/srv'
} else {
  port = 8443
  certpath = 'test/private'
  deploypath = './srv'
}

server({
  env: env,
  port: port,
  cert: fs.readFileSync(`${certpath}/deploy.crt`),
  key: fs.readFileSync(`${certpath}/deploy.key`),
  path: deploypath,
  repo: process.env.DEPLOY_REPO ||
    'https://github.com/ourtownrentals/test-php-app.git',
  branch: process.env.DEPLOY_BRANCH || 'master'
})
