define([
	'dom', 'app/component'
], function ($, component) {
	"use strict";

	describe('app/component', function () {


		it('should have "init" method', function () {
			expect(component).to.be.an.object;
			expect(component).to.have.property('init');
			expect(component.init).to.be.a('function');
		});


	});

});
