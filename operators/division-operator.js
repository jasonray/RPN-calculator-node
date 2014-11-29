/*jslint node: true */
'use strict';

module.exports = function(numbers) {
	var rhs = numbers.pop();
	var lhs = numbers.pop();

	if (rhs === 0) throw new Error("division by zero");

	var result = lhs / rhs;
	numbers.push(result);
	return result;
};