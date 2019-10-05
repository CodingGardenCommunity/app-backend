project=-p new_app-backend

setup:
	@docker-compose build

start:
	@docker-compose -f docker-compose.yml $(project) up -d

test:
	@docker-compose -f ./docker-compose-test.yml up

ssh:
	@docker exec -it app-backend_dev bash

test_now:
	@docker exec -it app-backend_dev yarn run test
