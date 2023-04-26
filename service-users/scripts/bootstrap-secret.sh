#!/bin/bash

kubectl create secret generic service-users-secret --from-env-file=../.env