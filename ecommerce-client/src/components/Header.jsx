import React from "react"
import { CiMail } from "react-icons/ci"
import { FaPhoneAlt } from "react-icons/fa"

export default function Header() {
    return (
        <header className="">
            <div className="bg-[#7E33E0]">
                <nav className="container track text-white py-4 flex justify-between">
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
                    <div>login cart</div>
                </nav>
            </div>
            <nav className="flex justify-between container track ">
                <p>Hektop</p>
                <input />
                search
            </nav>
        </header>
    )
}
