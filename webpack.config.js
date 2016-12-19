var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

// 文件路径
const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const srcPath = path.join(__dirname, '/../src');

module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:3000",
		"webpack/hot/only-dev-server",
		"./src/index.js",
	],
	output:{
		path: path.join(__dirname, './build'),
		filename:"build.js",
		publishPath: "/build/"
	},
	preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
	module:{
		 loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!autoprefixer-loader!imageDatas.jsonless-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test:/\.(|eot|ttf|svg)$/,
        loader:'url-loader?limit=8192'
      },
      {
        test:/\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      },
       {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        // 在这里添加 react-hot，注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }

    ]
	},
	resolve: {
		extensions:['', '.js','.jsx','.json', '.scss']
	},
	plugins:[
	 //添加我们的插件 会自动生成一个html文件
		new webpack.HotModuleReplacementPlugin()
	],


};	