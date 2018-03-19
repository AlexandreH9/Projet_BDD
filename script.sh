#!/bin/bash

docker exec master_mongo bash -c 'cd scripts/ ; mongo --port 30011 < script_mongo.js'

# Commandes pour importer la base mysql 
# docker exec -it master_mysql bash 'cd scripts/ ; mysql weather < fichier'