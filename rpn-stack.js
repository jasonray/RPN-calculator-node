function Stack() {
	var self = this;
	self.internalStack = [];

	self.pop = function() {
		if (this.isEmpty()) {
			return 0;
		} else {
			return self.internalStack.pop();
		}
	};

	self.peek = function() {
		if (this.isEmpty()) {
			return 0;
		} else {
			return self.internalStack[self.internalStack.length - 1];
		}
	};

	self.isEmpty = function() {
		return (self.internalStack.length === 0);
	};

	return self;

}

	Stack.prototype.push = function(n) {
		var self = this;
		self.internalStack.push(n);
	};



module.exports = Stack;