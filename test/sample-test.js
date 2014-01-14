"use strict";
var buster = require('buster');
var assert = buster.assert;

buster.testCase("Sample", {

	setUp: function () {
		this.xxx = 1;
	},

	"xxx should be equal to 1": function () {
		assert.equals(this.xxx, 1);
	},

	"should assert true": function () {
		assert(true);
	}

});


