var Calculator = require('../calculator');

module.exports.factorialReturnsProduct = function(test) {
	var calc = new Calculator();
	calc.enter(4);
	test.equals(24, calc.perform("!"));
	test.done();
};

module.exports.factorialOnNothing = function(test) {
	var calc = new Calculator();
	test.equals(1, calc.perform("!"));
	test.done();
};

exports.twoFactorials = function(test) {
	var calc = new Calculator();
	calc.enter(3);
	calc.perform("!");
	test.equals(720, calc.perform("!"));
	test.done();
};

exports.nonInteger = function(test) {
	var calc = new Calculator();
	calc.enter(3.1);

	test.throws(function() {
		calc.perform("!");
	}, Error);

	test.done();
};