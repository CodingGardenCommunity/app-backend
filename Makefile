test:
	@docker-compose -f ./docker-compose-test.yml up

ssh:
	@docker exec -it app-backend_dev bash
