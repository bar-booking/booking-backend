#!/bin/bash

docker-compose -f production.yml run certbot renew \
&& docker-compose -f production.yml kill -s SIGHUP webserver
