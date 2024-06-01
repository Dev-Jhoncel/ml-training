/**
 * Write a function that prints the numbers from 1 to a given number.
 * But for multiples of three print 'Fizz' instead of the number and for the
 * multiples of five print 'Buzz'.
 * For numbers which are multiples of both three and five print 'FizzBuzz'.
 * @param {number} n The number to print.
 */

const printNum = (n:number): void => {
    let strPrint = "" ;
    for(let i = 1; i <= n ; i++)
    {  
        if(i%3 === 0 || i%5 === 0)
        {
            strPrint += (i%3 === 0 && i%5 === 0)? "FizzBuzz" : (i%3 === 0)? "Fizz" : "Buzz" ;
        }
        else
        {
            strPrint += i;
        }
        console.log(strPrint);
        strPrint = "";
    }
}
printNum(30);