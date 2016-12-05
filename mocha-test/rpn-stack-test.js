/*jslint node: true */
'use strict';

/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var RpnStack = require('../rpn-stack');
var assert = require('assert');

describe('rpn stack', function () {
    it('popEmptyStack', function () {
        var stack = new RpnStack();
        var result = stack.pop();
        assert.equal(0, result);
    });
    it('peekEmptyStack', function () {
        var stack = new RpnStack();
        assert.equal(0, stack.peek());
    });
    it('peekFromPush', function () {
        var stack = new RpnStack();
        stack.push(2);
        assert.equal(2, stack.peek());
    });
    it('popFronmPush', function () {
        var stack = new RpnStack();
        stack.push(2);
        stack.push(5);
        assert.equal(5, stack.pop());
        assert.equal(2, stack.pop());
    });
    it('multiplePeeks', function () {
        var stack = new RpnStack();
        stack.push(2);
        stack.push(5);
        assert.equal(5, stack.peek());
        assert.equal(5, stack.peek());
    });
    it('emptyStackWithPopsNextReturns0', function () {
        var stack = new RpnStack();
        stack.push(2);
        assert.equal(2, stack.pop());
        assert.equal(0, stack.peek());
    });
    it('pushPop', function () {
        var stack = new RpnStack();
        stack.push(1);
        assert.equal(1, stack.pop());
    });
});