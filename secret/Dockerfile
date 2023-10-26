FROM ubuntu/nginx:latest

WORKDIR  /var/www/html
RUN apt update && apt upgrade -y && apt install -y gpg && apt install -y nano && rm /var/www/html/*
COPY *.html .
EXPOSE 80
