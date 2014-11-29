/*jslint node: true */
'use strict';

function Stack() {
	var self = this;
	self.internalStack = [];
	return self;
}

Stack.prototype.push = function(n) {
	var self = this;
	self.internalStack.push(n);
};

Stack.prototype.isEmpty = function() {
	var self = this;
	return (self.internalStack.length === 0);
};

Stack.prototype.peek = function() {
	var self = this;
	if (self.isEmpty()) {
		return 0;
	} else {
		return self.internalStack[self.internalStack.length - 1];
	}
};

Stack.prototype.pop = function() {
	var self = this;
	if (self.isEmpty()) {
		return 0;
	} else {
		return self.internalStack.pop();
	}
};

Stack.prototype.toString = function() {
	return this.internalStack;
}

module.exports = Stack;