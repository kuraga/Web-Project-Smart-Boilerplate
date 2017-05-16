#!/bin/bash -x

cd ../server
STAGE=acceptance-test ENV=acceptance-test bundle exec rackup --env development --port 4567 --pid /tmp/zeus.pid --daemonize
cd ../staging
