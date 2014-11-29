/*jslint node: true */
'use strict';

var RpnStack = require('../rpn-stack');

module.exports.popEmptyStack = function(test) {
    var stack = new RpnStack();
    var result = stack.pop();
    test.equals(0, result);
    test.done();
};

module.exports.peekEmptyStack = function(test) {
    var stack = new RpnStack();
    test.equals(0, stack.peek());
    test.done();
};

module.exports.peekFromPush = function(test) {
    var stack = new RpnStack();
    stack.push(2);
    test.equals(2, stack.peek());
    test.done();
};

module.exports.popFronmPush = function(test) {
    var stack = new RpnStack();
    stack.push(2);
    stack.push(5);
    test.equals(5, stack.pop());
    test.equals(2, stack.pop());
    test.done();
};

module.exports.multiplePeeks = function(test) {
    var stack = new RpnStack();
    stack.push(2);
    stack.push(5);
    test.equals(5, stack.peek());
    test.equals(5, stack.peek());
    test.done();
};

module.exports.emptyStackWithPopsNextReturns0 = function(test) {
    var stack = new RpnStack();
    stack.push(2);
    test.equals(2, stack.pop());
    test.equals(0, stack.peek());
    test.done();
};

module.exports.pushPop = function(test) {
    var stack = new RpnStack();
    stack.push(1);
    test.equals(1, stack.pop());
    test.done();
}