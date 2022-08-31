const express = require('express');
const router = express.Router();
// const { body } = require('express-validator');
const service = require('../services/userService');
const {IPFilter } = require('../filter/index');
// 鉴权路由
router.post('/auth', IPFilter, service.auth);

module.exports = router;
