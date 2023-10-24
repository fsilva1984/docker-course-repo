#! /bin/bash

echo
date
echo
echo "		CONTAINER"
sleep 2
sudo docker container ls -a
echo
echo "          SERVICE"
sleep 2
sudo  docker service ls
echo
echo "          NETWORK"
sleep 2
sudo docker network ls
echo
echo "          IMAGE"
sleep 2
sudo docker image ls
echo
echo "          VOLUME"
sleep 2
sudo docker volume ls
echo
