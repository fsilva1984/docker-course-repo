FROM nginx:alpine

WORKDIR  /usr/share/nginx/html
RUN apk update
ADD . .
VOLUME /usr/share/nginx/html/
EXPOSE 80


