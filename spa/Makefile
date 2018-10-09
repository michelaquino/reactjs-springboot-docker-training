setup:
	npm install

run-local-https:
	HTTPS=true npm start

run-local:
	npm start

build-app-prod:
	npm run-script build

test:
	npm test

.PHONY:	build
build:
	docker-compose build

.PHONY:	up
up:
	docker-compose up

.PHONY:	stop
stop:
	docker-compose stop

.PHONY: run-prod
run-prod: build up