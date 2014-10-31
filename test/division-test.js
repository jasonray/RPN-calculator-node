var Calculator = require('../calculator');

module.exports.divideTwoNumber = function(test) {
	var calc = new Calculator();
	calc.enter(8);
	calc.enter(2);
	var result = calc.perform("/");
	test.equals(4, result);
	test.done();
};

module.exports.divideOneNumber = function(test) {
	var calc = new Calculator();
	calc.enter(2);
	var result = calc.perform("/");
	test.equals(0, result);
	test.done();
};

module.exports.divideNoNumbers = function(test) {
	var calc = new Calculator();
	test.throws(function() {
		calc.perform("/");
	}, Error);
	test.done();
};

exports.divideThreeNumbers = function(test) {
	var calc = new Calculator();
	calc.enter(16);
	calc.enter(8);
	calc.enter(2);
	calc.perform("/");
	var result = calc.perform("/");
	test.equals(4, result);
	test.done();
};

exports.divideByZero = function(test) {
	var calc = new Calculator();
	calc.enter(5);
	calc.enter(0);
	test.throws(function() {
		calc.perform("/");
	}, Error);
	test.done();
};

exports.resultNonInteger = function(test) {
	var calc = new Calculator();
	calc.enter(6);
	calc.enter(4);
	var result = calc.perform("/");
	test.equals(1.5, result);
	test.done();
};

exports.divideWithNonInteger = function(test) {
	var calc = new Calculator();
	calc.enter(2.5);
	calc.enter(1.5);
	var result = calc.perform("/");
	floatsAreEqual(test, 1 + 2 / 3, result);
	test.done();
};

function floatsAreEqual(test, x, y) {
	var a = (Math.round(parseFloat(x) * 100) / 100);
	var b = (Math.round(parseFloat(y) * 100) / 100);
	test.equals(a, b);
}