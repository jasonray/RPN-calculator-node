var calculator = require('../calculator');

exports.multiplyNoNumbers = function(test) {
	var calc = new calculator.calc();
	var result = calc.perform("*");
	test.equals(0, result);
	test.done();
};

exports.multiplyTwoNumbersReturnsSum = function(test) {
	var calc = new calculator.calc();
	calc.enter(5);
	calc.enter(4);
	var result = calc.perform("*");
	test.equals(20, result);
	test.done();
};

exports.multiplyOneNumber = function(test) {
	var calc = new calculator.calc();
	calc.enter(4);
	var result = calc.perform("*");
	test.equals(0, result);
	test.done();
};

exports.multiplyThreeNumbers = function(test) {
	var calc = new calculator.calc();
	calc.enter(4);
	calc.enter(2);
	calc.enter(3);
	calc.perform("*");
	var result = calc.perform("*");
	test.equals(24, result);
	test.done();
};

exports.multiplyNegativeNumbers = function(test) {
	var calc = new calculator.calc();
	calc.enter(-3);
	calc.enter(-2);
	var result = calc.perform("*");
	test.equals(6, result);
	test.done();
};

exports.multiplyWithx = function(test) {
	var calc = new calculator.calc();
	calc.enter(5);
	calc.enter(4);
	var result = calc.perform("x");
	test.equals(20, result);
	test.done();
}

exports.multiplyWithX = function(test) {
	var calc = new calculator.calc();
	calc.enter(5);
	calc.enter(4);
	var result = calc.perform("X");
	test.equals(20, result);
	test.done();
}