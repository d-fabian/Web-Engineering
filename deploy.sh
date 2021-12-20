#!/usr/bin/env sh

vue-cli-service build

git add dist -f

git commit -m 'new Deployment'

git subtree push --prefix dist origin gh-pages
