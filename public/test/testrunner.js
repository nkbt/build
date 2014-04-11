"use strict";

require.config({
	baseUrl: '../js',
	paths: {
		underscore: 'vendor/underscore',
		dom: 'vendor/jquery',
		async: 'vendor/async',
		bootstrap: 'vendor/bootstrap',
		vendorCss: '../css',
		themeCss: '../css/themes/test',
		views: '../views',
		test: '../test',
		app: './app',
		mocha: '../test/mocha',
		chai: '../test/chai'
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
		bootstrap: ['dom'],
		mocha: {
			exports: 'mocha'
		},
		chai: {
			exports: 'chai'
		}
	},
	map: {
		'*': {
			'css': 'vendor/require/css',
			'txt': 'vendor/require/text'
		}
	},
	deps: []
});

// load tests
require([
	'mocha', 'chai'
], function (mocha, chai) {
	// start the test runner
	mocha.ui('bdd');

	window.expect = chai.expect;

	// load up the tests
	require([
		'test/app/component'

		// add more here...
	], function () {
		if (window.mochaPhantomJS) {
			mochaPhantomJS.run();
		} else {
			mocha.run();
		}
	});
});
