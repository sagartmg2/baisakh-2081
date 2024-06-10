/* cart database */
let cartItems = [
    {
        user: {
            name: "Ram",
            adress: "abc",
            items: [
                { name: "watch", price: 1000 },
                { name: "keybord", price: 500 },
            ],
        },
    },
    {
        user: {
            name: "hari",
            adress: "xyz",
            items: [
                { name: "watch", price: 2000 },
                { name: "keybord", price: 5000 },
            ],
        },
    },
    {
        user: {
            name: "sita",
            adress: "xyz",
            items: [
                { name: "watch", price: 1000 },
                { name: "keybord", price: 500 },
                { name: "mouse", price: 500 },
            ],
        },
    },
]


/* 
    expected output in console
    ram has orderd of 1500
    hari has orderd of 7000
    sita has orderd of 2000
*/


