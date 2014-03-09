function stack() {
	var internalStack=new Array();

	this.push = function(n) {
		internalStack.push(n);
	}

	this.pop = function() {
		if (this.isEmpty()) {
			return 0;
		} else {
			return internalStack.pop();
		}
	}

	this.peek = function() {
		if (this.isEmpty()) {
			return 0;
		} else {
			return internalStack[internalStack.length-1];
		}
	}

	this.isEmpty = function() {
		var result = internalStack.length==0;
		return (result);
	}

}

exports.stack = stack;
