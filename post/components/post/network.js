const express = require('express');

const response = require('../../../network/response');
//const { upsert } = require('../../../store/dummy');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);

// Functions
function list(req, res, next) {
    Controller.list()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}

module.exports = router;