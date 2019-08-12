const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  lintOnSave: false,
  outputDir: resolve('client/dist'),
  chainWebpack: (config) => {
    config
      .entry('app')
      .clear()
      .add(resolve('client/src/main.js'))
      .end()

    config.resolve.alias
      .set('@', resolve('client/src'))

    config
      .plugin('html')
      .tap(args => {
        args[0].template = resolve('client/public/index.html')
        return args
      })
  },
  devServer: {
    proxy: {
      '^/api': {
        target: `http://localhost:${process.env.API_PORT}`,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
    },
  },
}
