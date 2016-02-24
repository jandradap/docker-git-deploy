#!/bin/bash

set -e

exec gosu node /usr/src/app/index.js "$@"
