#!/usr/bin/env sh

npm run build

git add dist -f

git commit -m 'new Deployment'

git subtree push --prefix dist origin gh-pages
