var calculator = require('../calculator');

exports.emptyAdd = function (test) {
	var calc = new calculator.calc();
	var result = calc.perform("+");
	test.equals(0,result);
	test.done();
};

exports.enterNonNumericValue = function(test) {
	var calc = new calculator.calc();
	test.throws( 
		function() {
			calc.enter('a');
		},
		Error
	);
	test.done();
}

exports.handleUnknownOperatorCharacter = function(test) {
	var calc = new calculator.calc();
	test.throws( 
		function() {
			calc.perform("unknown")
		},
		Error
	);
	test.done();
}