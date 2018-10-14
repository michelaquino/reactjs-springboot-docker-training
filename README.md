# React JS, Spring Boot and Docker training [![CircleCI](https://circleci.com/gh/vrcca/reactjs-springboot-docker-training.svg?style=svg)](https://circleci.com/gh/vrcca/reactjs-springboot-docker-training)

## How to use it

This repo is a reference for a workshop on using Java and Spring to build
an API and React to build a SPA, running everything with Docker.

The [api](/api) folder contains a Springboot API that allows you to
create and retrieve blog posts.

The [spa](/spa) folder contains a React SPA that consumes from the blog
posts API.

### Running with docker

Both the API and SPA can be built using Docker via a Dockerfile. To run
both of them use docker-compose.

First you need to build both images by running:

```
docker-compose build 
```

Then run a container for each image with

```
docker-compose up
```

If you go to http://localhost:9090 you should see the SPA. To hit the
API directly use http://localhost:8080.

