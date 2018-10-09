# Stage 1: Build app
FROM node:10 as react-build
WORKDIR /app
COPY . ./
RUN make setup
RUN make build-app-prod

# Stage 2: Deploy and Serve by Nginx
FROM nginx:latest
COPY --from=react-build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
