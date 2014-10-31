var Calculator = require('../calculator');

module.exports.subtractNoNumbers = function(test) {
	var calc = new Calculator();
	var result = calc.perform("-");
	test.equals(0, result);
	test.done();
};

module.exports.subtractOneNumber = function(test) {
	var calc = new Calculator();
	calc.enter(1);
	var result = calc.perform("-");
	test.equals(-1, result);
	test.done();
};

module.exports.subtractOneNumberTwice = function(test) {
	var calc = new Calculator();
	calc.enter(1);
	calc.perform("-");
	var result = calc.perform("-");
	test.equals(1, result);
	test.done();
};

module.exports.subtractTwoNumbers = function(test) {
	var calc = new Calculator();
	calc.enter(10);
	calc.enter(3);
	var result = calc.perform("-");
	test.equals(7, result);
	test.done();
};

module.exports.subtractThreeNumbers = function(test) {
	var calc = new Calculator();
	calc.enter(21);
	calc.enter(13);
	calc.perform("-");
	calc.enter(5);
	var result = calc.perform("-");
	test.equals(3, result);
	test.done();
};

module.exports.subtractWithNonInteger = function(test) {
	var calc = new Calculator();
	calc.enter(1.5);
	calc.enter(0.3);
	var result = calc.perform("-");
	test.equals(1.2, result);
	test.done();
};