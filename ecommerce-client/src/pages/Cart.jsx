import React from 'react'
import { useSelector,useDispatch } from "react-redux"

export default function Cart() {
    
    const cartItems = useSelector((reduxStore) => {
        return reduxStore.cart.value
    })
  return (
    <div>
        <h1>Cart List</h1>
        {JSON.stringify(cartItems)}
    </div>
  )
}
