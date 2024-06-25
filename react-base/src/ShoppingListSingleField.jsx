import React, { useState } from "react"

export default function ShoppingList() {
    // let items = ["one", "two"]
    const [items, setItems] = useState(["one", "two"])

    function addNewItem(e) {
        e.preventDefault()
        // items.push(e.target.title.value)
        setItems([...items,e.target.title.value])
        console.log(e.target.title.value)
        console.log("submitted", items)
    }

    return (
        <>
            <div>ShoppingList</div>
            <hr />
            <form onSubmit={addNewItem}>
                <input type="text" name="title" placeholder="title" />
                <button>add item</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr>
                                <td>{item}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
