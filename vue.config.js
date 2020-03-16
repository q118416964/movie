module.exports = {
  publicPath:process.env.NODE_ENV=="production"?"./":"/",  //打包配置，解决页面空白的配置方案。
    css: {
        loaderOptions: {
          css: {},
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 37.5
              })
            ]
          }
        }
    },
}