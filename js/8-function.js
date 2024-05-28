function double(input) {
  console.log("double of " + input + " is " + input * 2)
}

double(2)
double(100)
double(150)

/* 
        let input1 = 1
        let input2 = 2
        let result = input1 + input2
        console.log(input1 + " + " + input2 + " = " + result)

        let input3 = 3
        let input4 = 44
        let result2 = input3 + input4
        console.log(input3 + " + " + input4 + " = " + result2)

        let input5 = 3
        let input6 = 104
        let result3 = input5 + input6
        console.log(input5 + " + " + input6 + " = " + result3)
 */

/* function   // group  */

function sum(firstInput, secondInput) {
  let result = firstInput + secondInput
  console.log("the sum of " + firstInput + "  and  " + secondInput + " is " + result)
}

/* call / execute  the funciton */
sum(100, 200)
/* 
    while calling sum(100,200) internally js sets as
    let firstInput = 100;
    let secondInput = 200
*/

sum(1, 9)
/* 
    while calling sum(1,9) internally js sets as
    let firstInput = 1;
    let secondInput = 9
*/


sum(50, 40)
sum(40, 40)
