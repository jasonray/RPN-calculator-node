var calculator = require('../calculator');

exports.averageEmpty = function (test) {
	var calc = new calculator.calc();
	test.equals(0,calc.perform("AVE"));
	test.done();
};

exports.averageOneNumber = function (test) {
	var calc = new calculator.calc();
	calc.enter(5);
	test.equals(5,calc.perform("AVE"));
	test.done();
};

exports.averageTwoNumbers = function (test) {
	var calc = new calculator.calc();
	calc.enter(5);
	calc.enter(15);
	test.equals(10,calc.perform("AVE"));
	test.done();
};

exports.averageFiveNumbers = function (test) {
	var calc = new calculator.calc();
	calc.enter(1);
	calc.enter(2);
	calc.enter(3);
	calc.enter(4);
	calc.enter(5);
	test.equals(3,calc.perform("AVE"));
	test.done();
};

exports.averageUsingAverageKeyworkd = function (test) {
	var calc = new calculator.calc();
	calc.enter(2);
	calc.enter(4);
	test.equals(3,calc.perform("AVERAGE"));
	test.done();
};

exports.averageWithNegativeNumbers = function (test) {
	var calc = new calculator.calc();
	calc.enter(2);
	calc.enter(-4);
	test.equals(-1,calc.perform("AVE"));
	test.done();
};
