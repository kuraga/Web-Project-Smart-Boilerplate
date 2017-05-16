#!/bin/bash -x

cd ../server_production
STAGE=production ENV=production bundle exec rackup --env deployment --pid /tmp/zeus.pid --port 4567
cd ../staging
