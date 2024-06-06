let student1 = {
    name: "ram",
    gender: "male",
    paidStatus: false,
    hasScholorship: false,
    hasMetAttandence: true,
}

let student2 = {
    name: "sita",
    gender: "female",
    paidStatus: false,
    hasScholorship: false,
    hasMetAttandence: false,
}

let student3 = {
    name: "gita",
    gender: "others",
    paidStatus: true,
    hasScholorship: false,
    hasMetAttandence: true,
}

function checkEligibility1(student) {
    if (student.paidStatus || student.hasScholorship) {
        if (student.hasMetAttandence) {
            console.log(student.name, "can give exam")
        } else {
            console.log(student.name, "cant give exam")
        }
    } else {
        console.log(student.name, "cant give exam")
    }
}

function checkEligibility2(student) {
    if (student.paidStatus || student.hasScholorship) {
        if (student.hasMetAttandence) {
            console.log(student.name, "can give exam")
            return
        }
    }

    console.log(student.name, "cant give exam")
}

/* 
function checkEligibility(student) {
    if (
        student.paidStatus ||
        student.hasScholorship ||
        student.hasMetAttandence
    ) {
        console.log(student.name, "can give exam")
    } else {
        console.log(student.name, "cant give exam")
    }
}

*/

function checkEligibility(student) {
    if (
        (student.hasScholorship || student.paidStatus) &&
        student.hasMetAttandence
    ) {
        console.log(student.name, "can give exam")
    } else {
        console.log(student.name, "cant give exam")
    }
}

/* AND  &&  */
checkEligibility(student1)
checkEligibility(student2)
checkEligibility(student3)

// print from 0 to 10
// console.log(1)
// console.log(2)
// console.log(3)

/* loop 
    - for 
        when we know the exact number of iterations

    - while

    synatx

    for( startingPoint ; condition ;mutator ){

    }

*/

for (let startingPoint = 0; startingPoint < 3; startingPoint++) {
    console.log(startingPoint)
}

for (let startingPoint = 1; startingPoint <= 10; startingPoint++) {
    console.log(startingPoint)
}

/* 
    0 
    1
    2
*/
console.log("end of loop")

let fruits = ["apple", "orange", "kiwi"]

/* 
    in  index 0 , there is apple
    in  index 1 , there is orange
    in  index 2 , there is kiwi
*/

let users = [
    { userName: "ram", password: "password" },
    { userName: "hari", password: "password1" },
    { userName: "shyam", password: "password2" },
]

login("ram","password") // login success
login("ram","password12") // login failed
