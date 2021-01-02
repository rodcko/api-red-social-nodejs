const redis = require('redis');

const config = require('../config');

const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
});

function list(table) {
    return new Promise( (resolve, reject) => {
        client.get(table, (err, data) => {
            if (err) return reject(err);

            let res = data || null
            if (res)
                res = JSON.stringify(res);
            
            resolve(res);
        })
    })
}

function get(table, id) {
    const search = `${table}_${id}`;
    return list(search);
}

function upsert(table, data, action) {
    action = action || 'insert'
    let key = table;
    if (action !== 'insert')
        key = key + '_' + data.id;
    
    client.setex(key,10, JSON.stringify(data));
    return true;
}


module.exports = {
    list,
    get,
    upsert,
};