init:
	@./scripts/init.sh

start:
	@./scripts/start.sh

down:
	@./scripts/down.sh

stop:
	@./scripts/down.sh

clear:
	@./scripts/clear.sh

restart:
	@./scripts/down.sh
	@./scripts/start.sh