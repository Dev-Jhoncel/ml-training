/**
 * Write a function to check if a number is even or odd.
 * @param {number} num The number to check.
 * @return {boolean} True if the number is even, false if it is odd.
 */
var checkNumFunc = function (num) {
    return (num % 2 === 0) ? true : false;
};
console.log(checkNumFunc(1));
