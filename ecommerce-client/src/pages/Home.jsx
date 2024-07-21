import React, { useState,useEffect } from "react"
import Header from "../components/Header"
import { useSelector, useDispatch } from "react-redux"
import { addCartItem } from "../redux/slices/cartSlice"
import axios from "axios"

export default function Home() {
    const [trendingProducts, setTrendingProducts] = useState([])
    const dispatch = useDispatch()

    const cartItems = useSelector((reduxStore) => {
        return reduxStore.cart.value
    })

    useEffect(() => {
        axios
            .get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
            .then((res) => {
                setTrendingProducts(res.data.data)
            })
    }, [])

    return (
        <div>
            <p className="container">
                banner Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nihil voluptas assumenda vitae deleniti, unde at! Voluptate
                velit ad, nobis quibusdam, et corporis ut dolor praesentium nemo
                repellendus corrupti quo voluptas!
            </p>
            <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {trendingProducts.map((el) => {
                    return (
                        <div key={el._id} className="border border-black">
                          <img src={el.image} className="h-32"/>
                            <p>{el.name}</p>
                            <button
                                onClick={() => {
                                    dispatch(addCartItem(el))
                                }}
                                className="btn"
                            >
                                add to cart
                            </button>
                        </div>
                    )
                })}
            </div>
            <br />
            <br />
            <br />
            <hr />
            <br />\ cart tiems
            {JSON.stringify(cartItems)}
        </div>
    )
}
