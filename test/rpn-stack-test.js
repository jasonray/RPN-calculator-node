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
        stack.pop().should.equal(0);
    });
    it('peekEmptyStack', function () {
        var stack = new RpnStack();
        stack.peek().should.equal(0);
    });
    it('peekFromPush', function () {
        var stack = new RpnStack();
        stack.push(2);
        stack.peek().should.equal(2);
    });
    it('popFronmPush', function () {
        var stack = new RpnStack();
        stack.push(2);
        stack.push(5);
        stack.pop().should.equal(5);
        stack.pop().should.equal(2);
    });
    it('multiplePeeks', function () {
        var stack = new RpnStack();
        stack.push(2);
        stack.push(5);
        stack.peek().should.equal(5);
        stack.peek().should.equal(5);
    });
    it('emptyStackWithPopsNextReturns0', function () {
        var stack = new RpnStack();
        stack.push(2);
        stack.pop().should.equal(2);
        stack.peek().should.equal(0);
    });
    it('pushPop', function () {
        var stack = new RpnStack();
        stack.push(1);
        stack.pop().should.equal(1);
    });
});
