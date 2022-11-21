init:
	@./scripts/init.sh

up:
	@./scripts/start.sh

start: up

down:
	@./scripts/down.sh
	
stop: down

clear:
	@./scripts/clear.sh

restart: down up

logs:
	@docker-compose logs

tail:
	@docker-compose logs -f