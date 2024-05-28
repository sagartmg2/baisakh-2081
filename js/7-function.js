/* 
    WAP to calculate sum of two number
    1,2
    3,4
    5,6
    100,50


    1 + 2 = 3
    3 + 4 = 7
    5 + 6 = 11
    100 + 50 = 150 
    .
    .
    .\

    the sum of 1 and 2 is 3
    the sum of 3 and 4 is 7

*/

/*
    console.log( "4 + 2 = 6" );
    console.log( "3 + 4 = 7" );
    console.log( "5 + 6 = 11" );
 */

let input1 = 1
let input2 = 2
let result = input1 + input2
console.log(input1 + " + " + input2 + " = " + result)
console.log("the sum of " + +input1 + " and " + input2 + " is " + result)

/* template literal */

let input3 = 3
let input4 = 44
let result2 = input3 + input4
console.log(input3 + " + " + input4 + " = " + result2)
console.log("the sum of "+input3 + " and " + input4 + " is " + result2)

let input5 = 3
let input6 = 104
let result3 = input5 + input6
console.log(input5 + " + " + input6 + " = " + result3)

/* DRY */
/* function */

/* 
    sum(1,2)
    sum(5,2)
    sum(1,2,3,4,5,6,7)
    sum(4,5,6,7)
*/

let firstName = "ram"
let lastName = "bdr"
let fullName = firstName + " " + lastName
console.log(fullName)
