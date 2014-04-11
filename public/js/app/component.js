define(['dom'], function ($) {
	"use strict";

	function init() {
		require(['txt!views/component.html', 'css!themeCss/component'], function (view) {
			$('#component')
				.html(view)
				.trigger('app/component:ready');
			
		});
	}

	return {
		init: init
	};

});
