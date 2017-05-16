#!/bin/bash -x

rm --recursive --force ../server

cd ../client
rm -rf build _public
STAGE=build ENV=development npm run build
cd ../staging

cd ../api
rm -rf build
STAGE=build ENV=development bundle exec rake build
mv build ../server
cd ../staging

rsync --recursive --links --quiet will_be_copied_to_server/ ../server
rsync --recursive --links --quiet ../client/_public ../server
