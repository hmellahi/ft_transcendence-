sudo rm -rf /etc/docker
sudo snap refresh
# docker exec -it api kill 1
docker-compose up --remove-orphans #--build