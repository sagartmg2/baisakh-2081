let student1 = {
    name: "ram",
    gender: "male",
    paidStatus: false,
    hasScholorship: true,
    hasMetAttandence:true
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
    hasScholorship: true,
    hasMetAttandence: false,
}


/* 
    if(student1.paidStatus){
        console.log(student1.name,"can give exam");
    }else{
        console.log(student1.name,"can't give exam");
    }


    if(student2.paidStatus){
        console.log(student2.name,"can give exam");
    }else{
        console.log(student2.name,"can't give exam");
    } 
*/

function checkEligibility1(student) {
    if (student.paidStatus) {
        if (student.gender == "male") {
            console.log("Mr" + student.name, "can give exam")
        } else if (student.gender == "female") {
            console.log("Mrs" + student.name, "can give exam")
        } else {
            console.log("__" + student.name, "can give exam")
        }
    } else {
        if (student.gender == "male") {
            console.log("Mr" + student.name, "cant give exam")
        } else if (student.gender == "female") {
            console.log("Mrs" + student.name, "cant give exam")
        } else {
            console.log("__" + student.name, "cant give exam")
        }
    }
}

let color = "Red"
// let color = "white"

function double(input) {
    let output = input * 2
    console.log({ output })
    return output
}

console.log(double(100))

function triple(input) {
    let output = input * 3
    console.log({ output })
    return output
}
console.log(triple(500))

function checkEligibility2(student) {
    let prefix = "Mr."

    if (student.gender == "female") {
        // wrong  let prefix = "Mrs." // block scope
        prefix = "Mrs." // block scope
    } else if (student.gender == "others") {
        let prefix = "__"
    }

    if (student.paidStatus) {
        console.log(prefix + student.name, "can give exam")
    } else {
        console.log(prefix + student.name, "cant give exam")
    }
}

function checkEligibility3(student) {
    if (student.paidStatus) {
        console.log(student.name, "can give exam")
    } else if (student.hasScholorship) {
        console.log(student.name, "can give exam")
    } else {
        console.log(student.name, "cant give exam")
    }
}


function checkEligibility(student) {
    if (student.paidStatus || student.hasScholorship) {
        console.log(student.name, "can give exam")
    } else {
        console.log(student.name, "cant give exam")
    }
}

/* OR Operator  ||*/
/* AND Operator  &&  */

checkEligibility(student1)
checkEligibility(student2)
checkEligibility(student3)
