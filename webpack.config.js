const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');

module.exports = {
	entry: {
		main: ['webpack/hot/dev-server', './script/main.js']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename:　'js/[name].bundle.js',
		//publicPath: 'http://cdn.com/' //项目上线需要加上这个属性
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body', //'head', 不注入，自己手动在html中设置
		}),
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
	],
	module: {
		loaders:[
			{
				test: /\.js|\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			}
		]
	},
	resolveLoader: {
    	moduleExtensions: ['-loader']
  	},
	/*devServer: {
		//contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
		//colors: true,//在cmd终端中输出彩色日志
		historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
		inline: true,//设置为true，当源文件改变时会自动刷新页面
		port: 8080,//设置默认监听端口，如果省略，默认为"8080"
	  	open: true
		//process: true,//显示合并代码进度
	}*/

}