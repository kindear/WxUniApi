/**
 * WxUniApi 基础默认配置
 */
// 配置 0.0.0.0 则IP拦截器允许来自任何地址的请求
const LimitIP = '0.0.0.0';

// 部署域名 -- Node 项目运行的域名
const Domain = 'https://wx.apisev.cn';

// Redis 连接配置
const Redis = {
    host:'150.158.135.236',
    port:'6379',
    password:'963852'
}



module.exports = {
    LimitIP,
    Domain,
    Redis
}