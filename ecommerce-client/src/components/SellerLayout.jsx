import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { logoutReduxUser } from "../redux/slices/userSlice"
import { Link, Outlet } from "react-router-dom"

export default function SellerLayout() {
    let reduxUser = useSelector((store) => store.user.value)
    const dispatch = useDispatch()

    return (
        <div>
            <header className="bg-[#333] text-white py-6">
                <div className="container flex justify-between ">
                    <span>user name: {reduxUser.name}</span>
                    <span
                        onClick={() => {
                            dispatch(logoutReduxUser())
                        }}
                    >
                        logout
                    </span>
                </div>
            </header>

            <div className=" grid grid-cols-5 border border-2 min-h-[100vh] ">
                <div className="col-span-1 border border-black p-4">
                    <ul>
                        <li className="border-b border-black pb-1 mb-2"><Link to="dashboard">dashboard </Link></li>
                        <li className="border-b border-black pb-1 mb-2"><Link to="products">products </Link></li>
                        <li className="border-b border-black pb-1 mb-2"><Link to="products/add">products add </Link></li>
                    </ul>
                </div>
                <div className="col-span-4 p-4">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
