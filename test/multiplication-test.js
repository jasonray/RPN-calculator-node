var Calculator = require('../calculator');

module.exports.multiplyNoNumbers = function(test) {
	var calc = new Calculator();
	var result = calc.perform("*");
	test.equals(0, result);
	test.done();
};

module.exports.multiplyTwoNumbersReturnsSum = function(test) {
	var calc = new Calculator();
	calc.enter(5);
	calc.enter(4);
	var result = calc.perform("*");
	test.equals(20, result);
	test.done();
};

module.exports.multiplyOneNumber = function(test) {
	var calc = new Calculator();
	calc.enter(4);
	var result = calc.perform("*");
	test.equals(0, result);
	test.done();
};

module.exports.multiplyThreeNumbers = function(test) {
	var calc = new Calculator();
	calc.enter(4);
	calc.enter(2);
	calc.enter(3);
	calc.perform("*");
	var result = calc.perform("*");
	test.equals(24, result);
	test.done();
};

module.exports.multiplyNegativeNumbers = function(test) {
	var calc = new Calculator();
	calc.enter(-3);
	calc.enter(-2);
	var result = calc.perform("*");
	test.equals(6, result);
	test.done();
};

module.exports.multiplyWithx = function(test) {
	var calc = new Calculator();
	calc.enter(5);
	calc.enter(4);
	var result = calc.perform("x");
	test.equals(20, result);
	test.done();
};

module.exports.multiplyWithX = function(test) {
	var calc = new Calculator();
	calc.enter(5);
	calc.enter(4);
	var result = calc.perform("X");
	test.equals(20, result);
	test.done();
};

module.exports.multiplyWithNonInteger = function(test) {
	var calc = new Calculator();
	calc.enter(1.5);
	calc.enter(4);
	var result = calc.perform("X");
	test.equals(6, result);
	test.done();
};

module.exports.multiplyResultNonInteger = function(test) {
	var calc = new Calculator();
	calc.enter(1.5);
	calc.enter(3);
	var result = calc.perform("X");
	test.equals(4.5, result);
	test.done();
};