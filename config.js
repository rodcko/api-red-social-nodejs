module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
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
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-13909.c15.us-east-1-2.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || 13909,
        password: process.env.REDIS_PASS || 'TNauJvzkqMf2DLcH4hzztcgLp1SrVGLM',
    }
}