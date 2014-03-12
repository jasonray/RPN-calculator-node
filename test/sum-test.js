var calculator = require('../calculator');

exports.sumNoNumbers = function (test) {
	var calc = new calculator.calc();
	test.equals(0,calc.perform("sum"));
	test.done();
};

exports.sumOneNumber = function (test) {
	var calc = new calculator.calc();
	calc.enter(5);
	test.equals(5,calc.perform("sum"));
	test.done();
};

exports.sumTwoNumbers = function (test) {
	var calc = new calculator.calc();
	calc.enter(5);
	calc.enter(3);
	test.equals(8,calc.perform("sum"));
	test.done();
};

exports.sumThreeNumbers = function (test) {
	var calc = new calculator.calc();
	calc.enter(5);
	calc.enter(3);
	calc.enter(1);
	test.equals(9,calc.perform("sum"));
	test.done();
};

exports.subtractThreeNumbers = function (test) {
	var calc = new calculator.calc();
	calc.enter(11);
	calc.enter(5);
	calc.enter(3);
	calc.enter(1);
	test.equals(20,calc.perform("sum"));
	test.done();
};

