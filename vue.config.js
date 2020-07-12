module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },

  devServer: {
    port: 8081, // 端口
    proxy: {
      '/api/*': {
        target: 'http://localhost:8081/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  lintOnSave: false  // 取消 eslint 验证
}