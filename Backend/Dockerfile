# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/dotnet/runtime:8.0
FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR /app
COPY . .
CMD ["dotnet", "run", "--project", "UnhousedOutreach.Api"]
EXPOSE 5270

