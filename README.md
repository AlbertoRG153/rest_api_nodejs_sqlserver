# rest_api_nodejs_sqlserver
Creacion de un Rest API Microsoft SQL Server &amp; Nodejs CRUD

Pasos para instalar los modulos
1. npm init -y
2. npm install mssql express morgan cors dotenv
3. npm i @babel/core @babel/cli @babel/preset-env @babel/node nodemon -D
4. Agregar en el package.json en "scripts": "dev": "nodemon src/index.js -exec babel-node"
5. Dentro de la carpeta "src" crear las siguientes carpetas: "routes", "controllers", "database" y archivos: "app.js", "config.js"

Configracion de sql server configuration manager
6. Ir a la ruta de C:\Program Files (x86)\Microsoft SQL Server\150\Shared
7. Ejecutar el cmd como administrador y luego colocar el comando mofcomp sqlmgmproviderxpsp2up.mof
8. Habilitar el TCP/IP en SQL Server Network Congfiguration, dentro de la configuracion TC/IP agregar el puero 1433 a ambos los dos ultimos TCP Port