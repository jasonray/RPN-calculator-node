var Calculator = require('../calculator');

exports.enterStringReturnsValue = function(test) {
	var calc = new Calculator();
	test.equals(1, calc.enter("1"));
	test.done();
};

exports.enterNumberReturnsValue = function(test) {
	var calc = new Calculator();
	test.equals(1, calc.enter(1));
	test.done();
};

exports.enterNonInteger = function(test) {
	var calc = new Calculator();
	test.equals(1.5, calc.enter("1.5"));
	test.done();
};