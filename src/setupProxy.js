// 同源策略：配置网络代理
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/360pro', createProxyMiddleware({ //360测试服务器接口
    target: 'https://360dev.jiuzhangdigit.com',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/360pro': '', 
    }
  }));

  app.use('/api', createProxyMiddleware({ //邵亦博接口
    target: 'http://test-gw.mashangxiu.com',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/api': '', 
    }
  }));

  app.use('/api2', createProxyMiddleware({ //邵亦博接口
    target: 'http://47.93.114.103:6688',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/api2': '', 
    }
  }));
};