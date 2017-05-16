#!/bin/bash -x

cd ..

cd api
bundle install
cd ..

cd client
npm install
cd ..

mkdir shared
cd shared
ln -s ../api/Gemfile Gemfile
ln -s ../api/.bundle .bundle
bundle install
cd ..

mkdir staging/will_be_copied_to_server
cd staging/will_be_copied_to_server
ln -s ../shared/.bundle .bundle
mkdir vendor
ln -s ../../shared/vendor/bundle vendor/bundle
ln -s ../shared/Gemfile.lock Gemfile.lock
cd ../..

cd staging
