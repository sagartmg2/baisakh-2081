import React, { useState } from "react"

export default function ShoppingList() {
    const [items, setItems] = useState([
        { title: "apple", quantity: 10 },
        { title: "kiwi", quantity: 10 },
    ])

    function addNewItem(e) {
        e.preventDefault()

        let newItem = {
            title: e.target.title.value,
            quantity: e.target.quantity.value,
        }

        setItems([...items, newItem])

        e.target.title.value = ""
        e.target.quantity.value = ""
    }

    function deleteTodo(index) {
        console.log("delete", index)
        let filteredItems = items.filter((el, idx) => {
            if (idx == index) {
                return false
            }
            return true
        })
        setItems(filteredItems)
    }

    return (
        <>
            <div>ShoppingList</div>
            <hr />
            <form onSubmit={addNewItem}>
                <input required type="text" name="title" placeholder="title" />
                <input
                    required
                    type="number"
                    name="quantity"
                    placeholder="quanitty"
                />
                <button>add item</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quanity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            deleteTodo(index)
                                        }}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
