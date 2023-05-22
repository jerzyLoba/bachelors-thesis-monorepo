#!/bin/bash

while getopts 's:' OPTION; do
    case "$OPTION" in
    s)
        service_name=$OPTARG
        ;;
    ?)
        echo "script usage: $(basename \$0) [-s service_name]" >&2
        exit 1
        ;;
    *)
        echo "Error in command line parsing"
        exit 1
        ;;
    esac
done

shift "$(($OPTIND - 1))"

if [ -z "$service_name" ]; then
    echo 'Missing service name' >&2
    exit 1
fi

status=$(minikube status -f "{{.Host}}")

if [ "$status" = "Stopped" ]; then
    echo "minikube stopped..."
    echo "starting minikube"
    minikube start
fi

echo $service_name
eval $(minikube docker-env)
cd ../
docker build . -t lobao/$service_name -f "${service_name}/Dockerfile"
docker images
eval $(minikube docker-env --unset)
