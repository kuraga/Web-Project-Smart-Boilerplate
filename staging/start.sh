#!/bin/bash -x

cd ../server
STAGE=development ENV=development bundle exec rackup --env development --port 4567
cd ../staging
