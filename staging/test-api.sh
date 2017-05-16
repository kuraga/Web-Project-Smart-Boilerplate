#!/bin/bash -x

cd ../api
STAGE=build bundle exec rake clean
STAGE=build ENV=test bundle exec rake build
STAGE=test ENV=test bundle exec rake test
STAGE=build bundle exec rake clean
cd ../staging
