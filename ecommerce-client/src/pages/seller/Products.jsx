import axios from "axios"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

export default function Products() {
    const [products, setProducts] = useState([])

    /* 
    fetch api products
    send token in headers  and we will get products of particular seller only
  */

    const fetchProducts = () => {
        axios
            .get("https://ecommerce-sagartmg2.vercel.app/api/products", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                    )}`,
                },
            })
            .then((res) => {
                setProducts(res.data.products)
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const deleteProduct = (product_id) => {
        axios
            .delete(
                `https://ecommerce-sagartmg2.vercel.app/api/products/${product_id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "access_token"
                        )}`,
                    },
                }
            )
            .then((res) => {
                toast("prdouct deleted")
                fetchProducts()
            })
    }

    return (
        <div>
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
                                In stock
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((el) => {
                            return (
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {el.name}
                                    </th>
                                    <td className="px-6 py-4">{el.price}</td>
                                    <td className="px-6 py-4">{el.in_stock}</td>
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
