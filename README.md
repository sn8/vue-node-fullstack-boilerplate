# vue-node-fullstack-boilerplate

This is a full-stack webapp boilerplate project with Vue (+ vuex, vue-router) + Node (express).

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
Both server & client:
```
yarn run serve
```
Server:
```
yarn run server:serve
```
Client:
```
yarn run client:serve
```

### Compiles and minifies for production
Both server & client:
```
yarn run build
```
Server:
```
yarn run server:build
```
Client:
```
yarn run client:build
```

### Run your unit tests
Both server & client:
```
yarn run test:unit
```
Server:
```
yarn run server:test:unit
```
Client:
```
yarn run client:test:unit
```

### Lints files
```
yarn run lint
```

## Dockerization
```
docker build --tag vue-node-fullstack-boilerplate .
docker run --rm -it -p 80:80/tcp vue-node-fullstack-boilerplate:latest
```