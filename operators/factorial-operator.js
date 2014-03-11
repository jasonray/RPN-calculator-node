var rpnstack = require("../rpn-stack");

function doOperation(numbers) {
	var n = numbers.pop();
	var product = 1;

	for(var i = n; i>0; i--) {
		product = product * i;
	}

	numbers.push(product);
	return product;
}

exports.doOperation=doOperation;
