#!/bin/bash -x

rm --recursive --force ../server

cd ../client
rm -rf build _public
STAGE=build ENV=production npm run build
cd ../staging

cd ../api
rm -rf build
STAGE=build ENV=production bundle exec rake build
mv build ../server
cd ../staging

rsync --recursive --links --quiet will_be_copied_to_server/ ../server
rsync --recursive --links --quiet ../client/_public ../server

cd ..
rm -rf server_production
rsync --recursive --copy-links --quiet --exclude=vendor/bundle server/ server_production
rsync --recursive --copy-links --quiet server/vendor/bundle/ruby/2.2.0/cache server_production/vendor
cd staging
