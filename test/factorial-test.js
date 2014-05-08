var calculator = require('../calculator');

exports.factorialReturnsProduct = function (test) {
	var calc = new calculator.calc();
	calc.enter(4);
	test.equals(24,calc.perform("!"));
	test.done();
};

exports.factorialOnNothing = function (test) {
	var calc = new calculator.calc();
	test.equals(1,calc.perform("!"));
	test.done();
};

exports.twoFactorials = function (test) {
	var calc = new calculator.calc();
	calc.enter(3);
	calc.perform("!");
	test.equals(720,calc.perform("!"));
	test.done();
};

exports.nonInteger = function (test) {
	var calc = new calculator.calc();
	calc.enter(3.1);

	test.throws(function() {
		calc.perform("!");
	}, Error);

	test.done();
};

