/* cart database */
let cartItems = [
    {
        name: "Ram",
        items: [
            { name: "watch", price: 1000 },
            { name: "keybord", price: 500 },
        ],
    },
    {
        name: "hari",
        items: [
            { name: "watch", price: 2000 },
            { name: "keybord", price: 5000 },
        ],
    },
    {
        name: "sita",
        items: [],
    },
    {
        name: "shyam",
        items: [],
    },
]

/* code here  */
let filteredCartItems = []

cartItems.forEach((cartItem) => {
    if (cartItem.items.length > 0) {
        filteredCartItems.push(cartItem)
    }
})

console.log(filteredCartItems)

let newFilteredItems = cartItems.filter((cartItem) => {
    if (cartItem.items.length > 0) {
        return true
    }
})

console.log(newFilteredItems)

let student1 = {
    name: "ram",
    gender: "male",
    paidStatus: false,
    hasScholorship: true,
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
    hasScholorship: true,
    hasMetAttandence: false,
}

let students = [student1, student2, student3]
let eligibleStudents = []
let nonEligibleStudents = []


/* eligible students */
/* non eligible students */
