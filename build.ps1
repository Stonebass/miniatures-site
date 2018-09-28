# # Build front end
cd ./ClientApp
npm run build
cd..

# Copy frontend to dotnet app
if (-Not (Test-Path ($PSScriptRoot + "\wwwroot"))) {
  md -path ($PSScriptRoot + "\wwwroot")
}
Copy-Item -Path ($PSScriptRoot + "\ClientApp\build\*") -Destination ($PSScriptRoot + "\wwwroot") -Recurse -force

ls
cd ./wwwroot
ls
cd..

Get-ChildItem ($PSScriptRoot + "\wwwroot\static\js\*.js") | Rename-Item -NewName "main.js"
Get-ChildItem ($PSScriptRoot + "\wwwroot\static\js\*.js.map") | Rename-Item -NewName "main.js.map"

Get-ChildItem ($PSScriptRoot + "\wwwroot\static\css\*.css") | Rename-Item -NewName "main.css"
Get-ChildItem ($PSScriptRoot + "\wwwroot\static\css\*.css.map") | Rename-Item -NewName "main.css.map"