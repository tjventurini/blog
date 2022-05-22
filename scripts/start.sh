#!/usr/bin/env bash

# Load config.
source ./config/colors.conf

# Start the containers.
docker-compose up -d && echo -e "${SUCCESS}It's alive! 🧟${NC}"

# Show logs.
docker-compose logs -f