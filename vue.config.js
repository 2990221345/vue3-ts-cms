// element自动导入配置
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')
module.exports = {
  // publicPath: './',
  outputDir: 'dist',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 配置方式二：和webpack属性完全一致，最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  configureWebpack: {
    // production
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // }
  // 配置方式三
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', path.resolve(__dirname, '@/components'))
  }
}
