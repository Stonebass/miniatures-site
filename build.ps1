# Build front end
cd ./ClientApp
npm run build
cd..

# Copy frontend to dotnet app
Copy-Item -Path ($PSScriptRoot+"\ClientApp\build\*") -Destination ($PSScriptRoot+"\wwwroot") -Recurse -force

# Build dotnet
dotnet restore
dotnet build