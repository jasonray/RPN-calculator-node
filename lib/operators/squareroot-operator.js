const _ = require('underscore');
const monomialOperator = require('./monomial-operator');

module.exports = function (numbers) {
    return monomialOperator(numbers, squareroot);

    function squareroot(n) {
        return Math.sqrt(n);
    }


};