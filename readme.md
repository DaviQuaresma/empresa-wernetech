----- docker:

-resetar o docker forçado:
wsl --shutdown

-validar o se o docker ta rodando:
docker info

-Checar os serviços docker rodando:
docker ps
docker ps -a

-Iniciar os containers:
docker-compose up -d

-Chegar o log do docker:
docker logs id(pego no docker ps)

-Subir/atualizar containers:
docker compose up -d --build

-Atualizar em caso de estiver rodando:
docker compose down
docker compose up -d --build

-Limpar cache:
docker system prune -af

-Ver as variaveis de ambiente do docker:
docker compose exec postgres env | Select-String POSTGRES

-Testar conexão manual:
docker exec -it wernetech_app bash

-Após testar tente conectar ao banco:
psql -U wernetech_admin -d empresa (troque as variaveis de acordo com o seu banco)

-Comandos reset dentro da vps:
docker-compose down -v
docker-compose build --no-cache
docker-compose up
