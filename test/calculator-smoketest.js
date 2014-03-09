var calculator = require('../calculator');

exports.testSomething = function (test) {
	var calc = new calculator.calc();
	var result = calc.perform("+");
	test.equals(0,result);
	test.done();
};