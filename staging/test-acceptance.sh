#!/bin/bash -x

./build-acceptance-test.sh
./start-acceptance-test.sh

cd ../acceptance_testing
node test.js
cd ../staging

./stop-acceptance-test.sh
