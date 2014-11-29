/*jslint node: true */
'use strict';

var Calculator = require('../calculator');

module.exports.fibEmpty = function(test) {
	var calc = new Calculator();
	test.equals(0, calc.perform("fib"));
	test.done();
};

module.exports.fib1 = function(test) {
	var calc = new Calculator();
	calc.enter(1);
	test.equals(1, calc.perform("fib"));
	test.done();
};

module.exports.fib2 = function(test) {
	var calc = new Calculator();
	calc.enter(2);
	test.equals(1, calc.perform("fib"));
	test.done();
};

module.exports.fib3 = function(test) {
	var calc = new Calculator();
	calc.enter(3);
	test.equals(2, calc.perform("fib"));
	test.done();
};

module.exports.fib4 = function(test) {
	var calc = new Calculator();
	calc.enter(4);
	test.equals(3, calc.perform("fib"));
	test.done();
};

module.exports.fib5 = function(test) {
	var calc = new Calculator();
	calc.enter(5);
	test.equals(5, calc.perform("fib"));
	test.done();
};

module.exports.fib6 = function(test) {
	var calc = new Calculator();
	calc.enter(6);
	test.equals(8, calc.perform("fib"));
	test.done();
};

module.exports.fib7 = function(test) {
	var calc = new Calculator();
	calc.enter(7);
	test.equals(13, calc.perform("fib"));
	test.done();
};

module.exports.fib8 = function(test) {
	var calc = new Calculator();
	calc.enter(8);
	test.equals(21, calc.perform("fib"));
	test.done();
};

module.exports.fib30 = function(test) {
	var calc = new Calculator();
	calc.enter(30);
	test.equals(832040, calc.perform("fib"));
	test.done();
};

module.exports.fib40 = function(test) {
	var calc = new Calculator();
	calc.enter(40);
	test.equals(102334155, calc.perform("fib"));
	test.done();
};

module.exports.nonInteger = function(test) {
	var calc = new Calculator();
	calc.enter(1.1);
	test.throws(function() {
		calc.perform("fib");
	}, Error);

	test.done();
};