# Triggered Git Deployment Server (Docker Container)

[![GitHub license](https://img.shields.io/github/license/ourtownrentals/docker-git-deploy.svg)](./LICENSE.txt)
[![David](https://img.shields.io/david/ourtownrentals/docker-git-deploy.svg)](https://david-dm.org/ourtownrentals/docker-git-deploy)

> <img src="https://makenew.github.io/makenew.svg" alt="Make New" height="20"> Built from [makenew/npm-package](https://github.com/makenew/npm-package).

## Description

Local https server for triggered git deploys.

## Usage

### Requirements

- [Docker].

The images are built and hosted automatically on Docker Hub
at [ourtownrentals/git-deploy].

Pull with

```
$ docker pull ourtownrentals/git-deploy
```

[Docker]: https://www.docker.com/
[ourtownrentals/git-deploy]: https://hub.docker.com/r/ourtownrentals/git-deploy/

## Development and Testing

### Source Code

The [git-deploy source] is hosted on GitHub.
Clone the project with

```
$ git clone https://github.com/ourtownrentals/docker-git-deploy.git
```

[git-deploy source]: https://github.com/ourtownrentals/docker-git-deploy

### Requirements

You will need [Node.js] with [npm].

Install the dependencies with

```
$ npm install
```

[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/

### Testing

#### Locally with Node.js

Start the server with

```
$ npm start
```

#### Building and running the docker image

Build and run the container with

```
$ docker build -t git-deploy .
$ docker run -p 443:443 -v $(pwd)/test/private:/etc/ssl/private git-deploy
```

## Contributing

Please submit and comment on bug reports and feature requests.

To submit a patch:

1. Fork it (https://github.com/ourtownrentals/docker-git-deploy/fork).
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Make changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

This npm package is licensed under the MIT license.

## Warranty

This software is provided "as is" and without any express or
implied warranties, including, without limitation, the implied
warranties of merchantibility and fitness for a particular
purpose.
