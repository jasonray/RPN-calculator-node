RPN-calculator-node
===================

The RPN [http://en.wikipedia.org/wiki/Reverse_Polish_notation] calculator implementation is a good exercise for working through a languages capabilities and exploring OO strategies.

This is a variation of the java [https://github.com/jasonray/RPN-calculator] and scala [https://github.com/jasonray/RPN-calculator-scala] implementations developed as part of past coding kata's.

How to run
==========
This implementation utilizes node.js and nodeunit.

To install node.js, either download or install using brew
```
brew install node
```

To run the unit tests, run the following shell script:
```
./runtest.sh
```

To add a new operator
=====================
1) Create a new operator implementation class.  Add this class to the `operators` directory.  Follow the conventation of `(operator name)-operator.js` (example: `addition-operator.js`).

2) The operator implementation class needs to implement `doOperation(numbers)`, where numbers is an instance of RPN-stack.  The doOperation(numbers) method is responsible for `pop`-ing the operands necessary to perform the operation, and `push`-ing the result back to the stack.

3) The operator implementation class needs to implement `handlesOperatorCharacter(operator)`, and to return true if the operator implementation can handle this character.

A sample base implementation for addition is shown below:

```
var rpnstack = require("../rpn-stack");

function doOperation(numbers) {
	var rhs = numbers.pop();
	var lhs = numbers.pop();
	var result = lhs + rhs;
	numbers.push(result);
	return result;
}

function handlesOperatorCharacter(operator) {
	return (operator=="+");
}

exports.doOperation=doOperation;
exports.handlesOperatorCharacter=handlesOperatorCharacter;
```

4) Register operator in `operator-register.js`.  To do this, add the following statement: 
```
registry.push( require("./operators/<your operator implementation file>") );
```
