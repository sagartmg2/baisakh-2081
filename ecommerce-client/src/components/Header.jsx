import React, { useState } from "react"
import { CiMail, CiSearch } from "react-icons/ci"
import { FaPhoneAlt } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className="">
            <div className="bg-[#7E33E0]">
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
                    <div>
                        {/* <a href="/login">login</a> */}
                        <Link to="/login">login</Link>
                    </div>
                </nav>
            </div>
            <nav className=" flex flex-wrap items-center justify-between container py-3 lg:py-4 xl:py-5">
                <Link to="/" className="text-[#0D0E43] font-semibold  text-[21px] md:text-[24px] lg:text-[27px] xl:text-[30px] 2xl:text-[34px]">
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
                        <Link to="/">home</Link>
                        <a href="">products</a>
                        <a href="">orders</a>
                        <a href="">about</a>
                        <a href="">contact</a>
                        <a href="">testimonials</a>
                    </div>
                    <div>
                        <input className="border border-black" />
                        <CiSearch className="inline" />
                    </div>
                </div>
            </nav>
        </header>
    )
}
