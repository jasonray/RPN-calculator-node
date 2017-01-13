/*jslint node: true */
'use strict';

class Stack {
    constructor() {
        var self = this;
        self.internalStack = [];
        return self;
    }

    push(n) {
        var self = this;
        self.internalStack.push(n);
    }

    isEmpty() {
        var self = this;
        return (self.internalStack.length === 0);
    }

    peek() {
        var self = this;
        if (self.isEmpty()) {
            return 0;
        } else {
            return self.internalStack[self.internalStack.length - 1];
        }
    }

    pop() {
        var self = this;
        if (self.isEmpty()) {
            return 0;
        } else {
            return self.internalStack.pop();

        }
    }
}

module.exports = Stack;
