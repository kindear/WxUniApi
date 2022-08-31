const redis = require("redis");

const axios = require("axios");
const { appId, appSecret } = require("../config");
// 全局配置 -- 初始化Redis连接
const { Redis } = require("../../config");

/**
 * 置换TOKEN -- 微信小程序
 */

/**
 * 从数据库中获取TOKEN --
 */
async function getToken() {
  const redisClient = redis.createClient({
    url: "redis://:963852@" + Redis.host + ":6379/6",
  });
  try {
    await redisClient.connect(); // 连接
  } catch (error) {
    console.log(error);
  }
  //   await redisClient.del('mini-token');
  // 获取
  const token = await redisClient.get("mini-token");
  console.log("token:" + token);
  if (token != null) {
    return token;
  } else if (token == null) {
    console.log("小程序TOKEN为空");
  }

  let qres = await axios.get(
    "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" +
      appId +
      "&secret=" +
      appSecret,
    {}
  );
  // 设置
  if (qres.data.access_token != undefined) {
    redisClient.set('mini-token',qres.data.access_token,{
        EX:6000
    })
    await redisClient.quit(); // 退出
    return qres.data.access_token;
  }
}

async function exMiniToken(req, res, next) {
  res.json({
    code: 200,
    msg: "success",
    data: await getToken()
  });
}

module.exports = {
  exToken: exMiniToken,
  exMiniToken,
  getToken,
};
