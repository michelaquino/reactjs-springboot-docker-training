FROM gradle:jdk8-alpine AS build-env
COPY --chown=gradle:gradle . .
RUN ["gradle", "--no-daemon", "build"]

FROM openjdk:8-alpine
COPY entrypoint.sh entrypoint.sh
COPY --from=build-env /home/gradle/build/libs/blog-api-0.0.1-SNAPSHOT.jar blog-api.jar
ENTRYPOINT [ "sh", "entrypoint.sh" ]
