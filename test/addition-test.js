var calculator = require('../calculator.js');

exports.addNoNumbers = function (test) {
	var result = calculator.perform("+");
	test.equals(0,result);
	test.done();
};