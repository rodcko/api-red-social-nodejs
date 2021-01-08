# API RED SOCIAL
Proyecto de un **API** para una red social, tecnologias utilizadas:

- Node.js / Express.js
- Autenticacion con JWT y cifrado con bycrypt
- Base de datos MySql
- Manejo de cache con Redis
- Documentacion con swagger-ui-express
- Gestion de microservicios con PM2
- Despliegue con Zeit Now

Como instalar el proyecto:
`npm install`

Como iniciar el proyecto:
En la carpeta raiz ejecutar los siguientes comandos para iniciar cada **api** con el gestor PM2:
- `pm2 start mysql/index.js` - API de MySql
- `pm2 start post/index.js`   - API de servicio de Posts
- `pm2 start api/index.js`     - API principal


------------
- Curso Practico de Node.js: https://platzi.com/clases/practico-node/
- Usuario de Platzi: https://platzi.com/p/rodcko2417/
