var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var open = require('open');

console.log("start ");

new WebpackDevServer(webpack(config),{
	publishPath: config.output.publishPath,
	hot: true,
	historyApiFallback: true,
	inline:true
}).listen(3000, 'localhost', function(err, result){
	if(err){
		return console.log(err);
	}

	open('http://localhost:3000/');
	console.log('listen at http://localhost:3000/')
});