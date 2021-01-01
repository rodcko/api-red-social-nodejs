const { list } = require("../../../store/mysql")

const TABLA = 'post';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }


    return {
        list,
    };
};