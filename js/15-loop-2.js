let numbers = [1, 2, 3, 4, 5]
/* 
numbers[0] = numbers[0] * 2
numbers[1] = numbers[1] * 2
numbers[2] = numbers[2] * 2
numbers[3] = numbers[3] * 2
numbers[4] = numbers[4] * 2 */

/* code here */

console.log(numbers) // [2,4,6,8,10]

for (let i = 1; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2
}


console.log(numbers)



const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]
const users = []

/* code below here. */

users[0] = { name: nepaliNames[0] , email: nepaliNames[0]+'@gmail.com', password: nepaliNames[0] + 0 }


/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    users:[
        { name: 'vAara', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/
