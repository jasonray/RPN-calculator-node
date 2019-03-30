const _ = require('underscore');
const monomialOperator = require('./monomial-operator');

module.exports = function (numbers) {
    function squareroot(n) {
        return Math.sqrt(n);
    }

    return monomialOperator(numbers, squareroot);
};