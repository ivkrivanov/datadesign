#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /src

RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["CoreStore/CoreStore.Web/CoreStore.Web.csproj", "CoreStore/CoreStore.Web/"]
RUN dotnet restore "CoreStore/CoreStore.Web/CoreStore.Web.csproj"
COPY . .
WORKDIR "/src/CoreStore/CoreStore.Web"
RUN dotnet build "CoreStore.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CoreStore.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CoreStore.Web.dll"]
