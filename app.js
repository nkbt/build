"use strict";
var nodeStatic = require('node-static');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');


var environment = process.argv[2] || 'dev';
var assetsDir = environment === 'dev' && './public' || './build';


var file = new nodeStatic.Server(assetsDir);
var indexContent = _.template(fs.readFileSync(path.join(__dirname, assetsDir, 'index.html'), 'utf-8'))({env: environment});
require('http').createServer(function (request, response) {
	request.addListener('end',function () {
		console.log(['Serving: ', request.url].join(''));
		if (request.url === '/' || request.url === '/index.html') {
			return response.end(indexContent);
		}
		return file.serve(request, response);
	}).resume();
}).listen(3000);

console.info(['Running on http://localhost:3000, environment: ', environment, ', assets: ', assetsDir].join(''));
