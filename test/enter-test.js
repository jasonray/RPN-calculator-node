var calculator = require('../calculator');

exports.enterStringReturnsValue = function(test) {
	var calc = new calculator.calc();
	test.equals(1, calc.enter("1"));
	test.done();
};

exports.enterNumberReturnsValue = function(test) {
	var calc = new calculator.calc();
	test.equals(1, calc.enter(1));
	test.done();
};

exports.enterNonInteger = function(test) {
	var calc = new calculator.calc();
	test.equals(1.5, calc.enter("1"));
	test.done();
};