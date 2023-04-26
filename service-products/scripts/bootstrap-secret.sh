#!/bin/bash

kubectl create secret generic service-products-secret --from-env-file=../.env