# SOCIAL NETWORK API
Project of an ** API ** for a social network, technologies used:

- Node.js / Express.js
- Authentication with JWT and encryption with bcrypt
- MySql database
- Cache management with Redis
- Documentation with swagger-ui-express
- Management of microservices with PM2
- Deployment with Zeit Now

How to install the project:
`npm install`

How to start the project:
In the root folder execute the following commands to start each ** api ** with the PM2 manager:
- `pm2 start mysql/index.js` - MySql API
- `pm2 start post/index.js`  - Posts service API
- `pm2 start api/index.js`   - Main API


------------
- Node.js Practical Course: https://platzi.com/clases/practico-node/
- Platzi User: https://platzi.com/p/rodcko2417/
