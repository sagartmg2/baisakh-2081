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
/* 
    for (let index = 0; index < cartItems.length; index++) {
        let element = cartItems[index]
        let userName = element.user.name
        let total = 0

        let subItems = element.user.items

        for (let subItemIndex = 0; subItemIndex < subItems.length; subItemIndex++) {
            total = total + subItems[subItemIndex].price
        }

        console.log(`${userName} has order or rs. ${total}`) // templa1te litreal // string literal
    }
*/


cartItems.forEach((cartItem) => {
    let total = 0
    cartItem.user.items.forEach((subItem) =>{
        total = total + subItem.price
    })
    console.log(`${cartItem.user.name} has orderd of rs ${total}`)
})
