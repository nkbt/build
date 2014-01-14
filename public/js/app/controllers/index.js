define('app/controllers/index', [
	'dom', 'underscore', 'app/component'
], function ($, _, component) {
	"use strict";

	function init() {
		require(['txt!views/index/index.html', 'css!themeCss/index/index'], function (view) {
			$('#content').html(view);
			
			setTimeout(component.init, 2000);
		});
	}

	return {
		init: init
	};

});
