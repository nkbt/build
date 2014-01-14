define('app/component', [
	'dom', 'underscore'
], function ($, _) {
	"use strict";

	function init() {
		require(['txt!views/component.html', 'css!themeCss/component'], function (view) {
			$('#component').html(view);
		});
	}

	return {
		init: init
	};

});
