/*jslint node: true */
'use strict';

var Calculator = require('../calculator');

module.exports.clearEmpty = function(test) {
	var calc = new Calculator();
	calc.perform("C");
	test.done();
};

module.exports.clearOnSingle = function(test) {
	var calc = new Calculator();
	calc.enter(1);
	calc.perform("C");
	test.equals(0, calc.perform("+"));
	test.done();
};

module.exports.ensureSupportForWordClear = function(test) {
	var calc = new Calculator();
	calc.enter(1);
	calc.perform("clear");
	test.equals(0, calc.perform("+"));
	test.done();
};

module.exports.ensureSupportForLowerCaseOperator = function(test) {
	var calc = new Calculator();
	calc.enter(1);
	calc.perform("c");
	test.equals(0, calc.perform("+"));
	test.done();
};

module.exports.clearOnList = function(test) {
	var calc = new Calculator();
	calc.enter(1);
	calc.enter(1);
	calc.enter(1);
	calc.enter(1);
	calc.enter(1);
	calc.perform("C");
	test.equals(0, calc.perform("+"));
	test.done();
};