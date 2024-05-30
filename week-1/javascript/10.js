/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */
const checkZero = (num1,num2) => {
    try
    {
        if(typeof num1 === "number" && typeof num2 === "number")
        {
            if(num2 === 0) throw new Error('The second number is a 0')
            return `Both inputs are valid`
        }
        else
        {
            throw new Error('The inputted parameter is not a number')
        }
    }
    catch(error){
        return error.message
    }
}