let fruits = [
    {
        name: "kiwi",
        quantity: 10,
    },
    {
        name: "orange",
        quantity: 4,
    },
    {
        name: "apple",
        quantity: 5,
    },
]


/* 
    there is 10 kg kiwi
    there is 4 kg orange
    there is 5 kg apple

    templelate lireal 
*/



/* nested loop .. users and cart times */

/* 
    console.log("in  index 0 , there is ", fruits[0])
    console.log("in  index 1 , there is ", fruits[1])
    console.log("in  index 2 , there is ", fruits[2])
    console.log("in  index 3 , there is ", fruits[3])
    console.log("in  index 4 , there is ", fruits[4])
    console.log("in  index 5 , there is ", fruits[5]) 
*/

for (let index = 0; index < fruits.length; index++) {
    // console.log({ index })
    console.log("in  index ", index, "there is ", fruits[index])
}

console.log("end of loop")
