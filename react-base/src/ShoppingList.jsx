import React from "react"

export default function ShoppingList() {
    return (
        <>
            <div>ShoppingList</div>
            <hr />
            <form>
                <input type="text" placeholder="title" />
                <input type="text" placeholder="quantity" />
                <button>add item</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>quanity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>apple</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>orane</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
