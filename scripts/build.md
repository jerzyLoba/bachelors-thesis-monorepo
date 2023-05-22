This directory is containing scripts that helps in preparation to run the application locally in minikube environment.

Since we are loading protobufs from `proto/` directory, we need to execute dockerfile in reachable context. Run `generate-docker-image.sh` with `-s` parameter specified.

### Available commands

```
 -s: service name to generate docker image for
 -h: help
```
