exports.doOperation = function(numbers) {
	var rhs = numbers.pop();
	var lhs = numbers.pop();
	var result = lhs - rhs;
	numbers.push(result);
	return result;
};