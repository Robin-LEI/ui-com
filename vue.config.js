const MarkdownItContainer = require('vue-markdown-loader')
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
                raw: true,
                use: [MarkdownItContainer, 'demo', {
                    // 用于校验包含demo的代码块
                    validate: params => params.trim().match(/^demo\s*(.*)$/),
                    render: function(tokens, idx) {
                        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                        if (tokens[idx].nestring === 1) {
                            var desc = tokens[idx + 2].content
                            // 编译为html
                            // const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
                            const html = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
                            // 移除描述，防止添加到代码块
                            tokens[idx + 2].children = []
                            return `<demo-block>
                                <p slot='desc'>${html}</p>
                                <p slot='highlight'>`
                        }
                        return '</p></demo-block><\n>'
                    }
                }]
            })
        }
}