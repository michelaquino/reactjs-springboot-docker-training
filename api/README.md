# Running locally with Docker

## Build the image

First step is to build the image:

```
docker build . -t local/blog-api
```

This will build the image and tag it as `local/blog-api`, this will be
used to run the image. You can change the name if you want.

## Running a container

Once the image is built, you can run a container:

```
docker run --name blog-api-dev -p 8080:8080 local/blog-api
```

The `--name` flag allows you to name your container, so you can reference
it later. You can change it to whatever you want or have Docker generate
a random name for you.

Since we need to expose a port for remote connection, we use the `-p` flag
to map the port on the host to the docker container. This way any connection
to `localhost:8080` will be forwarded to the container.

The last part `local/blog-api` is the label you've used when building
the image, if you changed it before change here as well.

## Other useful commands for your container

### Inspecting the container

Use `docker ps` to display the containers that are running currently. If you
are running the `blog-api-dev` container it should output something like:

```
$ docker ps
CONTAINER ID        IMAGE               COMMAND              CREATED             STATUS              PORTS                    NAMES
17d6366a59b0        local/blog-api      "sh entrypoint.sh"   24 minutes ago      Up 24 minutes       0.0.0.0:8080->8080/tcp   blog-api-dev
```

The output will list ports mapped to the container, the id (which can be used
instead of the name if you want) and the image name and tag so you can find
which image a container is using. This is good if you're working with versioned
images.

### Daemon mode

If you run a container with the command before it will start outputting the
log in your current terminal session. If you want to start a container on the
background, start the container as a daemon adding `-d` before the `-p` flag.

### Accessing logs

To access the logs of a container use `docker logs`:

```
docker logs -f blog-api-dev
```

Using `-f` allow you to keep watching the logs, instead of just printing and
exiting. The name `blog-api-dev` is the name you gave when you started the
container, so change it here if needed.

### Versioning an image

When building with `-t local/blog-api` docker will assume that you want to
create a new version of it and just override previous versions. If you want to
keep track of versions, you can specify it by appending `:version` like this:

```
docker build . -t local/blog-api:1.2.3
```

And you can do the same thing for running a specific version of the image:

```
docker run --name blog-api-dev -p 8080:8080 local/blog-api:1.2.3
```

### Stopping a container

To stop a running container use `docker stop` and `docker rm`:

```
docker stop blog-api-dev
docker rm blog-api-dev
```

This will stop the container and remove it. It is always good to remove
the container to avoid conflicts with future runs.

You can stop and remove all containers using:

```
docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)
```

## Testing the API

The API exposes two endpoints, one for creating a new blog post and another
one for retrieving a list of saved posts.

- `POST /posts` to create a post
- `GET /posts` to retrieve the list of posts

Blog posts IDs are generated automatically, so you don't need to send it
when creating a post.

####  Creating a blog post

Use curl, or postman if you want a nice UI, to submit a request with `"{\"title\": \"A post\", \"description\": \"A very nice post\"}`

```
curl -X POST http://localhost:8080/posts -H "Content-Type: application/json" -d "{\"title\": \"A post\", \"description\": \"A very nice post\"}"
```

### Listing all posts

You can list all existing blog posts by hitting `/posts` with a GET using
a browser or curl again:

```
curl -X GET http://localhost:8080/posts
```

