const path = require('path')
module.exports = {
	baseUrl: process.env.NODE_ENV === 'production'
    ? '/vc-dist/'
    : '/',

	configureWebpack: (config) => {
		config.entry.app = './examples/main.js'
		config.resolve.alias = {
	  'vue$': 'vue/dist/vue.js',
	  '@assets': path.join(__dirname, './examples/assets'),
      '@examples': path.join(__dirname, './examples')
 		};

		config.module.rules.push({
	        test: /\.md$/,
	        loaders: [
	          'vue-loader',
	          {
	            loader: 'vue-md-loader',
	            options: {
	              preProcess (source) {
	                // console.log('pre', source)
	                return source
	              },
	              afterProcess (result) {
	                // console.log('after', result)
	                return result
	              },
	              afterProcessLiveTemplate (template) {
	                return `<div class="live-wrapper">${template}</div>`
	              },
	              rules: {
	                'table_open': () => '<div class="table-responsive"><table class="table">',
	                'table_close': () => '</table></div>'
	              }
	            }
	          }
	        ]
	    })
	},

	chainWebpack: config => {
		config.when(process.env.NODE_ENV === 'production', config => {
			config.entry('app').clear().add('./examples/main.js')
		})
		config.when(process.env.NODE_ENV === 'development', config => {
			config.entry('app').clear().add('./examples/main.js')
		})
	}

}