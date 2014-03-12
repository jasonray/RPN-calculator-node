var calculator = require('../calculator');

exports.smokeTest = function (test) {
	var input = "1 2 +";
	var calc = new calculator.calc();
	var result = calc.processInputStream(input);
	test.equals(3,result);
	test.done();
};

exports.multiply = function (test) {
	runTest(test,"3 2 *",6);
};

function runTest(test, inputStream, expectedResult) {
	var calc = new calculator.calc();
	test.equals(expectedResult,calc.processInputStream(inputStream));
	test.done();
}