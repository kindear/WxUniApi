
// 登录
function auth(req, res, next) {
  res.json({ 
    code: 200, 
    msg: '登录成功', 
    data: "APP鉴权成功"
  })
}


module.exports = {
  auth
}
