var calculator = require('../calculator');

exports.subtractNoNumbers = function (test) {
	var calc = new calculator.calc();
	var result = calc.perform("-");
	test.equals(0,result);
	test.done();
};

exports.subtractOneNumber = function (test) {
	var calc = new calculator.calc();
	calc.enter(1);
	var result = calc.perform("-");
	test.equals(-1,result);
	test.done();
};

exports.subtractOneNumberTwice = function (test) {
	var calc = new calculator.calc();
	calc.enter(1);
	calc.perform("-");
	var result = calc.perform("-");
	test.equals(1,result);
	test.done();
};

