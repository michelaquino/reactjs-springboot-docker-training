# Agenda

- Physical, Virtual and Containers

Physical machines require maintenance and manual OS setup
Virtual machines (VMs) can be automated and virtualize OS
Containers runs on top of an OS with a small subset of features

- Docker 'Hello World'

Run a container using the alpine image that echoes 'Hello World'
Run a container accessing the alpine OS

- Images and Containers

Images are definitions, listing programs and setup
Containers are running instances of the definitions
Multiple containers of the same image can be running in parallel
Containers are ephemeral and isolated

- Creating an image and running a container

Define an image in a Dockerfile that echoes 'Hello World'
Run a container to echo 'Hello World'

- Dockerizing an application

Define an image that has all the requirements to run the API
You'll need to install Java 8 (openjdk), copy the code and run
`./gradlew build` to generate the jar file. Then you can do a
`java -jar` passing the path to the `.jar`, usually under 
'build/libs/<app-name>.jar'
When running a container based on the image you've just created
map the ports so that it can receive http requests

- Managing a docker container

List all running containers
See the logs from a container
Attach to a container
Stop and remove a container
