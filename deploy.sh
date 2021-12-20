#!/usr/bin/env sh

npm run build

cd dist

git init

git add -A

git commit -m 'new Deployment'

git push -f https://github.com/d-fabian/Web-Engineering.git master:gh-pages

cd -

