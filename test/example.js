"use strict";
var expect = require('chai').expect;


describe('Example', function () {
	var x;

	beforeEach(function () {
		x = 1;
	});


	it('x should be equal 1', function () {
		expect(x).to.equal(1);
		x = x + 1;
	});

	it('x should not be equal 2', function () {
		expect(x).not.to.equal(2);
	});

	it('should be skipped test');

});
