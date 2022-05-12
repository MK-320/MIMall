const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//导入path配置
'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports={

  //vue.config.js 每次修改完之后项目都需要重新编译
  //这个文件是webpack的配置文件
  //由于底层的nodejs遵守commonjs规范，所以需要使用module.exports 进行导入
  //vue.config.js解决的跨域的原理就是通过代理服务器来实现的，拦截请求通过nodejs服务器转发给别的服务器就不会出现跨域了

    // devServer:{
  //   host: 'localhost',
  //   port: 8080,
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //   }
  // }

  //配置常见的vue配置
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,TODO:这里有问题暂时先注释了
    resolve: {
      alias: {
        // 设置@/的意义
        '@': resolve('src')
      }
    }
  }

}
