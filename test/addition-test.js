var calculator = require('../calculator');

exports.addNoNumbers = function (test) {
	var calc = new calculator.calc();
	var result = calc.perform("+");
	test.equals(0,result);
	test.done();
};

exports.addTwoNumbersReturnsSum = function (test) {
	var calc = new calculator.calc();
	calc.enter(30);
	calc.enter(4);
	var result = calc.perform("+");
	test.equals(34,result);
	test.done();
}

exports.addOneNumber = function (test) {
	var calc = new calculator.calc();
	calc.enter(4);
	var result = calc.perform("+");
	test.equals(4,result);
	test.done();
}