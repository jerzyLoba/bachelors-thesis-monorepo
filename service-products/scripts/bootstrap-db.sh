#!/bin/bash

set -a
source ../.env
set +a

docker run -p $DB_PORT:5432 -d \
    -e POSTGRES_PASSWORD=$DB_PASSWORD \
    -e POSTGRES_USER=$DB_USER \
    -e POSTGRES_DB=$DB_NAME \
    -v pg-service-products:/var/lib/postgresql/data \
    postgres:15.1-alpine

# psql -U postgres -h localhost -d postgres -f create.sql
