#!/bin/bash

set -a
source ../.env
set +a

docker run -p $DB_PORT:5432 -d \
    --name $DB_NAME \
    -e POSTGRES_PASSWORD=$DB_PASSWORD \
    -e POSTGRES_USER=$DB_USER \
    -e POSTGRES_DB=$DB_NAME \
    -v pg-service-orders:/var/lib/postgresql/data \
    postgres:15.1-alpine

export PGPASSWORD=$DB_PASSWORD

psql -U $DB_USER -h localhost -p $DB_PORT -d $DB_NAME -f create.sql
