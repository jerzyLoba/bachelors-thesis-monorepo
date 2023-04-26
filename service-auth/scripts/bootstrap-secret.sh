#!/bin/bash

kubectl create secret generic service-auth-secret --from-env-file=../.env