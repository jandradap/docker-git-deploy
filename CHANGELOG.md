# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
This change log follows the conventions of
[keep a CHANGELOG](http://keepachangelog.com/).

## [Unreleased]

## [0.2.0] / 2016-05-05

### Changed

- Update to Node.js 5.11.0.
- Initial clone will work for non-empty destination path.
- Catch deploy errors at end of promise chain.
- Copy `package.json` and `npm-shrinkwrap.json` to container first
  and run `npm install` separately to improve caching.

## 0.1.0 / 2016-04-07

- Initial release.

[Unreleased]: https://github.com/ourtownrentals/docker-git-deploy/compare/v0.1.0...HEAD
