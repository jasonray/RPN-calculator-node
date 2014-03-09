var calculator = require('../calculator.js');

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