/**
 * 作者: kindear
 * 日期: 2022-08-30
 * 描述: IP 拦截中间件
 */
const { LimitIP } = require("../config");
/**
 * 获取客户端IP
 * @param {*} req
 * @returns
 */
function getClientIp(req) {
  return (
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  );
}

function IPFilter(req, res, next) {
  let clientIP = getClientIp(req);
  console.log("调用IP拦截器:" + clientIP);

  if (LimitIP == "0.0.0.0" || clientIP == LimitIP) {
    next();
  } else {
    res.status(403).json({
      code: 403,
      msg: "IP不在允许范围",
      data: null,
    });
    return;
  }
}

module.exports = {
  IPFilter,
};
