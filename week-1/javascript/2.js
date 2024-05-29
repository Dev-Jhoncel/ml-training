/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */
const sumFn = (arr) => {
    let initail_number = 0;
    for(let number of arr){
        
        initail_number+=number;
    }
    return initail_number;
}
console.log(sumFn([1,2,3]));
