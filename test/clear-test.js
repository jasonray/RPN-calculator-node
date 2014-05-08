var calculator = require('../calculator');

exports.clearEmpty = function(test) {
	var calc = new calculator.calc();
	calc.perform("C");
	test.done();
};

exports.clearOnSingle = function(test) {
	var calc = new calculator.calc();
	calc.enter(1);
	calc.perform("C");
	test.equals(0, calc.perform("+"));
	test.done();
};

exports.ensureSupportForWordClear = function(test) {
	var calc = new calculator.calc();
	calc.enter(1);
	calc.perform("clear");
	test.equals(0, calc.perform("+"));
	test.done();
};

exports.ensureSupportForLowerCaseOperator = function(test) {
	var calc = new calculator.calc();
	calc.enter(1);
	calc.perform("c");
	test.equals(0, calc.perform("+"));
	test.done();
};

exports.clearOnList = function(test) {
	var calc = new calculator.calc();
	calc.enter(1);
	calc.enter(1);
	calc.enter(1);
	calc.enter(1);
	calc.enter(1);
	calc.perform("C");
	test.equals(0, calc.perform("+"));
	test.done();
};