var Calculator = require('../calculator');

module.exports.emptyAdd = function(test) {
	var calc = new Calculator();
	var result = calc.perform("+");
	test.equals(0, result);
	test.done();
};

module.exports.enterNonNumericValue = function(test) {
	var calc = new Calculator();
	test.throws(
		function() {
			calc.enter('a');
		},
		Error
	);
	test.done();
};

module.exports.handleUnknownOperatorCharacter = function(test) {
	var calc = new Calculator();
	test.throws(
		function() {
			calc.perform("unknown");
		},
		Error
	);
	test.done();
};