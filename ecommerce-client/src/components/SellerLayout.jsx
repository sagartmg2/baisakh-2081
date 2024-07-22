import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { logoutReduxUser } from "../redux/slices/userSlice"

export default function SellerLayout() {
    let reduxUser = useSelector((store) => store.user.value)
    const dispatch = useDispatch()
    return (
        <div>
            <header>
                <span>{reduxUser.name}</span>
                <span onClick={() =>{
                    dispatch(logoutReduxUser())
                }}>logout</span>
            </header>

            <div className="grid grid-cols-5">
                <div className="col-span-1">
                    <ul>
                        <li>dashboard</li>
                        <li>products</li>
                        <li>products add</li>
                    </ul>
                </div>
                <div className="col-span-4">dashboard</div>
            </div>
        </div>
    )
}
