#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
#FROM mcr.microsoft.com/dotnet/aspnet:6.0-bullseye-slim AS base
RUN apt-get update && apt-get install -y --allow-unauthenticated libc6-dev libgdiplus libx11-dev && rm -rf /var/lib/apt/lists/*

WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
RUN apt-get update -yq && apt-get upgrade -yq && apt-get install -yq curl git nano
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -yq nodejs 
RUN npm install -g npm

WORKDIR /src
COPY ["Store.Web/Store.Web.csproj", "Store.Web/"]
RUN dotnet restore "Store.Web/Store.Web.csproj"
COPY . .
WORKDIR "/src/Store.Web"
RUN dotnet build "Store.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Store.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Store.Web.dll"]