#!/bin/bash

set -a
source ../.env
set +a

docker run -p $DB_PORT:6379 -d \
    --name $DB_NAME \
    -v $DB_NAME:/data \
    redis:7.0.7-alpine \
    redis-server --save 60 1 \
    --loglevel warning \
    --requirepass ${DB_PASSWORD}
