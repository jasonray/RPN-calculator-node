var calculator = require('../calculator.js');

exports.testSomething = function (test) {
	var result = calculator.perform("+");
	test.equals(0,result);
	test.done();
};