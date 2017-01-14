/*jslint node: true */
'use strict';

class Stack {
    constructor() {
        const self = this;
        self.internalStack = [];
        return self;
    }

    push(n) {
        const self = this;
        self.internalStack.push(n);
    }

    isEmpty() {
        const self = this;
        return (self.internalStack.length === 0);
    }

    peek() {
        const self = this;
        if (self.isEmpty()) {
            return 0;
        } else {
            return self.internalStack[self.internalStack.length - 1];
        }
    }

    pop() {
        const self = this;
        if (self.isEmpty()) {
            return 0;
        } else {
            return self.internalStack.pop();

        }
    }
}

module.exports = Stack;
