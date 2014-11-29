/*jslint node: true */
'use strict';

var Calculator = require('../calculator');

module.exports.sumNoNumbers = function(test) {
	var calc = new Calculator();
	test.equals(0, calc.perform("sum"));
	test.done();
};

module.exports.sumOneNumber = function(test) {
	var calc = new Calculator();
	calc.enter(5);
	test.equals(5, calc.perform("sum"));
	test.done();
};

module.exports.sumTwoNumbers = function(test) {
	var calc = new Calculator();
	calc.enter(5);
	calc.enter(3);
	test.equals(8, calc.perform("sum"));
	test.done();
};

module.exports.sumThreeNumbers = function(test) {
	var calc = new Calculator();
	calc.enter(5);
	calc.enter(3);
	calc.enter(1);
	test.equals(9, calc.perform("sum"));
	test.done();
};

module.exports.subtractThreeNumbers = function(test) {
	var calc = new Calculator();
	calc.enter(11);
	calc.enter(5);
	calc.enter(3);
	calc.enter(1);
	test.equals(20, calc.perform("sum"));
	test.done();
};

module.exports.sumNonIntegers = function(test) {
	var calc = new Calculator();
	calc.enter(1.5);
	calc.enter(3.5);
	calc.enter(2.5);
	test.equals(7.5, calc.perform("sum"));
	test.done();
};