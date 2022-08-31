// 获取TOKEN
const { getToken } = require("./exToken");
const axios = require("axios");
const { appId, appSecret } = require("../config");

/**
 *  获取用户开放 OPENID
 */
async function getOpenId(jscode) {
  let qres = await axios.get(
    "https://api.weixin.qq.com/sns/jscode2session?appid=" +
      appId +
      "&secret=" +
      appSecret +
      "&js_code=" +
      jscode +
      "&grant_type=authorization_code",
    {}
  );
  console.log(qres.data);
  return qres.data;
}
async function exOpenId(req, res, next) {
  let code = req.query["code"];
  console.log("code:" + code);
  let openId = await getOpenId(code);
  res.json({
    code: 200,
    msg: "success",
    data: openId,
  });
}
module.exports = {
  getOpenId,
  exOpenId,
};
