#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/mssql/server:2019-CU3-ubuntu-18.04
RUN powershell -Command mkdir C:\\SQLServer
#copy the database files from host to container
COPY C:\\sqldata\\Store_Default_v1.mdf C:\\SQLServer
COPY C:\\sqldata\\Store_Default_v1_log.ldf C:\\SQLServer
COPY C:\\sqldata\\Store_Store_v1.mdf C:\\SQLServer
COPY C:\\sqldata\\Store_Store_v1_log.ldf C:\\SQLServer
# set environment variables
ENV SA_PASSWORD=<DryRiver#958>
ENV ACCEPT_EULA=Y