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
        assert.equal(stack.pop(), 0);
    });
    it('peekEmptyStack', function () {
        var stack = new RpnStack();
        assert.equal(stack.peek(), 0);
    });
    it('peekFromPush', function () {
        var stack = new RpnStack();
        stack.push(2);
        assert.equal(stack.peek(), 2);
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
