#!/bin/bash

kubectl create secret generic service-cart-secret --from-env-file=../.env
