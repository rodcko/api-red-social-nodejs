module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'i2empQbkdq',
        password: process.env.MYSQL_PASS || 'tWRQWO45f1',
        database: process.env.MYSQL_DB || 'i2empQbkdq',
    },
}