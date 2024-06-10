
/* asynchronous
     - tasks that runs in backgorund
     - they donot block following codes.
*/

const doSomething = () => {
    console.log("do something")
}

/* callback function 
    a function which is passed to another function as a paramater
*/

setTimeout(doSomething, 5000)




/* synchronous */

console.log("Start of lopp")

for (let index = 0; index < 10; index++) {
    console.log(index)
}

console.log("end loop")


