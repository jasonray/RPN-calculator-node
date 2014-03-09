var rpnstack = require('../rpn-stack.js');

exports.popEmptyStack = function (test) {
	var stack = new rpnstack.stack();
	var result = stack.pop();
	test.equals(0,result);
	test.done();
};

exports.peekFromPush = function (test) {
	var stack =  new rpnstack.stack();
	stack.push(2);
	test.equals(2,stack.peek());
	test.done();
};

exports.popFromPush = function (test) {
	var stack =  new rpnstack.stack();
	stack.push(2);
	stack.push(5);
	test.equals(5,stack.pop());
	test.equals(2,stack.pop());
	test.done();
};

exports.multiplePeeks = function (test) {
	var stack =  new rpnstack.stack();
	stack.push(2);
	stack.push(5);
	test.equals(5,stack.peek());
	test.equals(5,stack.peek());
	test.done();
};

