const express = require('express');
const router = express.Router();
// const { body } = require('express-validator');
const {exToken} = require('./lib/exToken');
const {exOpenId} = require('./lib/openApi');
// 鉴权路由
router.get('/token', exToken);

router.get('/openid',exOpenId)

module.exports = router;
