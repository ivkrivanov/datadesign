docker pull mcr.microsoft.com/mssql/server2019-latest
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=34r0TNhvgOde" -p 1433:1433 --name sql2019 -h sql2019 -d mcr.microsoft.com/mssql/server:2019-latest
docker exec -it sql2019 mkdir /var/opt/mssql/backup
docker cp D:\databases\Store_Default_v1.bak sql2019:/var/opt/mssql/backup
docker cp D:\databases\Store_Store_v1.bak sql2019:/var/opt/mssql/backup