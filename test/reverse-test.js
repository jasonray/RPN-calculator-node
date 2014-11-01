var Calculator = require('../calculator');

module.exports.reverseNoNumbers = function(test) {
	var calc = new Calculator();
	var result = calc.perform("reverse");
	test.equals(0, result);
	test.equals(0, calc.numbers.pop());
	test.done();
};

module.exports.reverseOneNumber = function(test) {
	var calc = new Calculator();
	calc.enter(1);
	var result = calc.perform("reverse");
	test.equals(1, result);
	test.equals(1, calc.numbers.pop());
	test.equals(0, calc.numbers.pop());
	test.done();
};

module.exports.reverseTwoNumbers = function(test) {
	var calc = new Calculator();
	calc.enter(1);
	calc.enter(2);
	var result = calc.perform("reverse");
	test.equals(2, result);
	test.equals(2, calc.numbers.pop());
	test.equals(1, calc.numbers.pop());
	test.equals(0, calc.numbers.pop());
	test.done();
};