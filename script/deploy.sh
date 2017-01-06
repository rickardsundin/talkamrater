#!/bin/bash
set -e
cd $(dirname $0)
lein do clean, cljsbuild once release
cd resources/public
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "git@github.com:rickardsundin/talkamrater.git" master:gh-pages
rm -fr resources/public/.git
