import React from "react"
import Header from "../components/Header"
import { useSelector,useDispatch } from "react-redux"
import { addCartItem } from "../redux/slices/cartSlice"

export default function Home() {

    const dispatch = useDispatch()

    const cartItems = useSelector((reduxStore) => {
        return reduxStore.cart.value
    })

    return (
        <div>
            <p className="container">
                banner Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nihil voluptas assumenda vitae deleniti, unde at! Voluptate
                velit ad, nobis quibusdam, et corporis ut dolor praesentium nemo
                repellendus corrupti quo voluptas!
            </p>
            <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[1, 2, 3, 4].map((el) => {
                    return (
                        <div className="h-40 border border-black">
                            <p>cartItems</p>
                            <button onClick={() =>{
                              dispatch(addCartItem())
                            }} className="btn">add to cart</button>
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
