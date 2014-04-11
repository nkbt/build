define(['dom', 'app/component'], function ($, component) {
	"use strict";

	function init() {
		require(['txt!views/index/index.html', 'css!themeCss/index/index'], function (view) {
			setTimeout(component.init, 500);
		});
	}

	return {
		init: init
	};

});
