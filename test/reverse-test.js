var Calculator = require('../calculator');

module.exports.reverseNoNumbers = function(test) {
	var calc = new Calculator();
	var result = calc.perform("reverse");
	test.equals(0, result);
	test.done();
};
