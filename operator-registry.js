var rpnstack = require("./rpn-stack");

var registry = new Array();
registry.push( require("./operators/addition-operator") );
registry.push( require("./operators/subtraction-operator") );
registry.push( require("./operators/absolute-operator") );

function getOperator(operatorCharacter) {
	console.log("finding operator for " + operatorCharacter + "; current registry has " + registry);

	var relevantOperator = null;
	if (operatorCharacter!=null) {
		for (var i = 0; i < registry.length; i++) {
    		var operator = registry[i];
    		if (operator.handlesOperatorCharacter(operatorCharacter)) {
    			relevantOperator = operator;
    		}
		}
	}
	return relevantOperator;
}

exports.getOperator = getOperator;
