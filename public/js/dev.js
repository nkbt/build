(function () {
	"use strict";

	require.config({
		baseUrl: 'js',
		paths: {
			underscore: 'vendor/underscore',
			dom: 'vendor/jquery',
			async: 'vendor/async',
			bootstrap: 'vendor/bootstrap',
			vendorCss: '../css',
			themeCss: '../css/themes/test',
			views: '../views'
		},
		waitSeconds: 15, // Wait 15s for scripts to be loaded
		shim: {
			async: {
				exports: 'async'
			},
			underscore: {
				exports: '_'
			},
			dom: {
				exports: 'jQuery'
			},
			bootstrap: ['dom']
		},
		map: {
			'*': {
				'css': 'vendor/require/css',
				'txt': 'vendor/require/text'
			}
		},
		deps: [
		]
	});

// Load CSS
	require([
		'css!vendorCss/bootstrap',
		'css!themeCss'
	], function () {
		console.log('CSS loaded');
	});

// Start the main app logic.
	require([
		'dom',
		'underscore',
		'bootstrap',
		'app/controllers/index'
	], function () {
		console.log('App loaded');

		var $ = require('dom'),
			app = require('app/controllers/index');

		$(app.init);
	});
})();
