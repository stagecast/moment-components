const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  outputDir: './lib',
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/locale/lang',
          to: './locale',
          toType: 'dir'
        }
      ])
    ]
  }
}