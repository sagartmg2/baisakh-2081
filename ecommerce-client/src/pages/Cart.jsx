import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { changeQuantity } from "../redux/slices/cartSlice"

export default function Cart() {
    const cartItems = useSelector((reduxStore) => {
        return reduxStore.cart.value
    })

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Cart List</h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                quanity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((el) => {
                            return (
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {el.name}
                                    </th>
                                    <td className="px-6 py-4">{el.price}</td>
                                    <td className="px-6 py-4 flex gap-2 items-center">
                                        <button
                                            onClick={() => {
                                                dispatch(
                                                    changeQuantity({
                                                        _id: el._id,
                                                        type: "decrement",
                                                    })
                                                )
                                            }}
                                            className="btn"
                                            type="button"
                                        >
                                            -
                                        </button>{" "}
                                        {el.quantity}
                                        <button
                                            onClick={() => {
                                                dispatch(
                                                    changeQuantity({
                                                        _id: el._id,
                                                        type: "increment",
                                                    })
                                                )
                                            }}
                                            className="btn"
                                            type="button"
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link
                                            to={`/products/edit/${el._id}`}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        &nbsp; &nbsp;
                                        <button
                                            onClick={() => {
                                                deleteProduct(el._id)
                                            }}
                                            type="button"
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
