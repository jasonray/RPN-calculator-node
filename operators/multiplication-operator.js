'use strict';

module.exports.doOperation = function doOperation(numbers) {
	var rhs = numbers.pop();
	var lhs = numbers.pop();
	var result = lhs * rhs;
	numbers.push(result);
	return result;
};