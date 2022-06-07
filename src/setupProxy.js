// 同源策略：配置网络代理
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/app-pro', createProxyMiddleware({
    target: 'https://api.weixin.qq.com',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/app-pro': '', 
    }
  }));

  app.use('/pro-api', createProxyMiddleware({
    target: 'http://121.89.221.24',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/pro-api': '', 
    }
  }));
};