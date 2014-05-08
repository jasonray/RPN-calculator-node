var calculator = require('../calculator');

exports.fibEmpty = function(test) {
	var calc = new calculator.calc();
	test.equals(0, calc.perform("fib"));
	test.done();
};

exports.fib1 = function(test) {
	var calc = new calculator.calc();
	calc.enter(1);
	test.equals(1, calc.perform("fib"));
	test.done();
};

exports.fib2 = function(test) {
	var calc = new calculator.calc();
	calc.enter(2);
	test.equals(1, calc.perform("fib"));
	test.done();
};

exports.fib3 = function(test) {
	var calc = new calculator.calc();
	calc.enter(3);
	test.equals(2, calc.perform("fib"));
	test.done();
};

exports.fib4 = function(test) {
	var calc = new calculator.calc();
	calc.enter(4);
	test.equals(3, calc.perform("fib"));
	test.done();
};

exports.fib5 = function(test) {
	var calc = new calculator.calc();
	calc.enter(5);
	test.equals(5, calc.perform("fib"));
	test.done();
};

exports.fib6 = function(test) {
	var calc = new calculator.calc();
	calc.enter(6);
	test.equals(8, calc.perform("fib"));
	test.done();
};

exports.fib7 = function(test) {
	var calc = new calculator.calc();
	calc.enter(7);
	test.equals(13, calc.perform("fib"));
	test.done();
};

exports.fib8 = function(test) {
	var calc = new calculator.calc();
	calc.enter(8);
	test.equals(21, calc.perform("fib"));
	test.done();
};

exports.fib30 = function(test) {
	var calc = new calculator.calc();
	calc.enter(30);
	test.equals(832040, calc.perform("fib"));
	test.done();
};

exports.fib40 = function(test) {
	var calc = new calculator.calc();
	calc.enter(40);
	test.equals(102334155, calc.perform("fib"));
	test.done();
};

exports.nonInteger = function(test) {
	var calc = new calculator.calc();
	calc.enter(1.1);
	test.throws(function() {
		calc.perform("fib");
	}, Error);

	test.done();
};