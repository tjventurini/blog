#!/usr/bin/env bash

# Load config.
source ./config/colors.conf

# Bring the containers down.
docker-compose down --remove-orphans && echo -e "${SUCCESS}It's dead now! 💀${NC}"