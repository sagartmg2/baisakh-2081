import React, { useState } from "react"
import { CiMail, CiSearch } from "react-icons/ci"
import { FaPhoneAlt } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setReduxUser, logoutReduxUser } from "../redux/slices/userSlice"

// export default function Header({ user, setUser }) {
export default function Header() {
    let user = null
    let setUser = () => {}

    let reduxUser = useSelector((reduxStore) => reduxStore.user.value)
    let cartItems = useSelector((reduxStore) => reduxStore.cart.value)
    const dispatch = useDispatch()

    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className="">
            <div className="bg-primary">
                <nav className="container  text-white py-4 flex justify-between">
                    <div className="flex flex-col md:flex-row md:gap-4 lg:gap-8">
                        <div>
                            <CiMail className="mr-[10px] inline-block" />
                            emai@gmaicom
                        </div>
                        <div>
                            <FaPhoneAlt className="mr-[10px] inline-block" />{" "}
                            987325345234
                        </div>
                    </div>
                    {reduxUser ? (
                        <>
                            <div>
                                <span>{reduxUser.name}</span>
                                &nbsp; &nbsp;
                                <span
                                    onClick={() => {
                                        // setUser(null)
                                        // dispatch(setReduxUser(null))
                                        dispatch(logoutReduxUser())
                                        // localStorage.clear()
                                        // localStorage.removeItem("user")
                                    }}
                                >
                                    logout
                                </span>
                            </div>
                        </>
                    ) : (
                        <div>
                            {/* <a href="/login">login</a> */}
                            <Link to="/login">login</Link>
                        </div>
                    )}
                    <Link to={"/cart"}>cart ({cartItems.length})</Link>
                </nav>
            </div>
            <nav className=" flex flex-wrap items-center justify-between container py-3 lg:py-4 xl:py-5">
                <Link
                    to="/"
                    className="text-[#0D0E43] font-semibold  text-[21px] md:text-[24px] lg:text-[27px] xl:text-[30px] 2xl:text-[34px]"
                >
                    Hekto
                </Link>
                <MdMenu
                    onClick={() => {
                        setShowMenu(!showMenu)
                    }}
                    className="text-[32px] lg:hidden "
                />
                <div
                    className={`w-full transition-all ease-linear duration-300 ${
                        showMenu ? "max-h-[999px] " : "max-h-0 overflow-hidden"
                    }  text-center lg:w-auto lg:max-h-[999px] lg:flex lg:gap-40`}
                >
                    <div className="flex flex-col lg:flex-row justify-center gap-4">
                        {/* <a href="/">home</a> */}
                        <Link className="text-secondary" to="/">
                            home
                        </Link>
                        <a href="">products</a>
                        <a href="">about</a>
                        <a href="">contact</a>
                        <a href="">testimonials</a>
                        {reduxUser && <>
                            <a href="">orders</a>
                            <a href="">cart</a>
                        </>}
                    </div>
                    <div className="flex">
                        <input className="border border-black" />
                        <CiSearch className="px-1 inline bg-secondary text-white h-full w-6" />
                    </div>
                </div>
            </nav>
        </header>
    )
}
