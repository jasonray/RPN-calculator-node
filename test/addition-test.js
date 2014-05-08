var calculator = require('../calculator');

exports.addNoNumbers = function(test) {
	var calc = new calculator.calc();
	var result = calc.perform("+");
	test.equals(0, result);
	test.done();
};

exports.addTwoNumbersReturnsSum = function(test) {
	var calc = new calculator.calc();
	calc.enter(30);
	calc.enter(4);
	var result = calc.perform("+");
	test.equals(34, result);
	test.done();
}

exports.addOneNumber = function(test) {
	var calc = new calculator.calc();
	calc.enter(4);
	var result = calc.perform("+");
	test.equals(4, result);
	test.done();
}

exports.addThreeNumbers = function(test) {
	var calc = new calculator.calc();
	calc.enter(1);
	calc.enter(2);
	calc.enter(3);
	calc.perform("+");
	var result = calc.perform("+");
	test.equals(6, result);
	test.done();
}

exports.addNegativeNumbers = function(test) {
	var calc = new calculator.calc();
	calc.enter(-1);
	calc.enter(-2);
	var result = calc.perform("+");
	test.equals(-3, result);
	test.done();
}

exports.addDecimals = function(test) {
	var calc = new calculator.calc();
	calc.enter(1.5);
	calc.enter(2.3);
	var result = calc.perform("+");
	test.equals(3.8, result);
	test.done();
}