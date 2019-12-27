# ui-com

# 环境准备
- 把所有的组件存放在一个文件夹中
- 添加实例文档用于展示
- 将vue-cli脚手架生成的src目录改为examples用来存放示例文档
- 修改代码
```js
module.exports = {
configureWebpack: {
    entry: './examples/main.js'
},
chainWebpack: config => {  //修改webpack打包的入口文件。需要在根目录建两个对应入口js文件
config.when(process.env.NODE_ENV === 'production', config => {
  config.entry('app').clear().add('./examples/main.js')    //生产环境
})
config.when(process.env.NODE_ENV === 'development', config => {
  config.entry('app').clear().add('./examples/main.js')     //开发环境
    })
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
          raw: true
      })
  }
}
```

# 让vue支持Markdown
- `npm install --sava markdown-loader`