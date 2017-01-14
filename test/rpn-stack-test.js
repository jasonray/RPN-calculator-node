/*jslint node: true */
'use strict';

const RpnStack = require('../lib/rpn-stack');
const should = require('should');

describe('rpn stack', function () {
    it('popEmptyStack', function () {
        const stack = new RpnStack();
        stack.pop().should.equal(0);
    });
    it('peekEmptyStack', function () {
        const stack = new RpnStack();
        stack.peek().should.equal(0);
    });
    it('peekFromPush', function () {
        const stack = new RpnStack();
        stack.push(2);
        stack.peek().should.equal(2);
    });
    it('popFronmPush', function () {
        const stack = new RpnStack();
        stack.push(2);
        stack.push(5);
        stack.pop().should.equal(5);
        stack.pop().should.equal(2);
    });
    it('multiplePeeks', function () {
        const stack = new RpnStack();
        stack.push(2);
        stack.push(5);
        stack.peek().should.equal(5);
        stack.peek().should.equal(5);
    });
    it('emptyStackWithPopsNextReturns0', function () {
        const stack = new RpnStack();
        stack.push(2);
        stack.pop().should.equal(2);
        stack.peek().should.equal(0);
    });
    it('pushPop', function () {
        const stack = new RpnStack();
        stack.push(1);
        stack.pop().should.equal(1);
    });
});
