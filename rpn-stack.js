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

module.exports = Stack;