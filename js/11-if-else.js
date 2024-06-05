/* 
    if(<condition>){
        // do someting for true/matched conditon
    }else{
        // do something else. 
    }

*/

let willRain = false
let hasProbability = false

if (willRain) {
    console.log("take umbrella")
} else {
    console.log("no need ")
}

if (willRain) {
    console.log("take umbrella")
} else {
    if (hasProbability) {
        console.log("as your wish")
    } else {
        console.log("no need ")
    }
}

if (willRain) {
    console.log("take umbrella")
} else if (hasProbability) {
    console.log("as your wish")
} else {
    console.log("no need ")
}

let student1 = {
    name: "ram",
    gender: "male",
    paidStatus: false,
}
let student2 = {
    name: "sita",
    gender: "female",
    paidStatus: false,
}

let student3 = {
    name: "gita",
    gender: "female",
    paidStatus: true,
}

/* 
    output:
    ram cannot attend exam
    sita cannot attend exam
    gita can attend exam

    research on: ternary opetaror

*/
