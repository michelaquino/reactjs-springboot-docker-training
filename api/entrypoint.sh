#!/bin/sh -e
SPRING_PROFILE=${1:-"dev"}
echo "Starting app..."
java -jar -Dspring.profiles.active=$SPRING_PROFILE blog-api.jar
