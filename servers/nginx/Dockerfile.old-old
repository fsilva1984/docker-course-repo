FROM httpd:alpine

WORKDIR /usr/local/apache2/htdocs

RUN apk update

EXPOSE 80

ENTRYPOINT ["/usr/local/apache2/bin/apachectl"]
CMD ["-D", "FOREGROUND"]
