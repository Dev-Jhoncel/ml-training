/**
 * Write a function for loop that iterates from 1 to a given number. It then checks and outputs whether the number is even or odd.
 * @param {number} n The number to check.
 */
const countNumber = (n:number):void => {
    for(let i = 1; i <= n; i++)
    {
        console.log(`The number ${i} is ${(i % 2 === 0)? "even" : "odd"}`);
    }
}

countNumber(10);