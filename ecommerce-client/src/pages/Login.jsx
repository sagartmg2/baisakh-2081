import React, { useState } from "react"
import Header from "../components/Header"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Login() {
    const navigate = useNavigate() // return () =>{}
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
                email: e.target.email.value,
                password: e.target.password.value,
            })
            .then(() => {
                // redirect to login
                // window.location = "/login"
                toast("login success")
                navigate("/")
            })
            .catch((err) => {
                if (err?.response?.status) {
                    return toast.error(err.response.data.msg)
                }
                toast.error("something went wrong")
            })
    }
    return (
        <div>
            <Header />
            <div className="container mt-20 ">
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label for="email" className="form-label">
                            Your email
                        </label>
                        <input
                            value="b@b.com"
                            name="email"
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="name@flowbite.com"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label for="password" className="form-label">
                            Your password
                        </label>
                        <input
                            value={"password"}
                            name="password"
                            type="password"
                            id="password"
                            className="form-control"
                            required
                        />
                    </div>

                    <p className="my-4 ">
                        new user ?{" "}
                        <Link
                            to="/signup"
                            className="hover:underline text-blue-500"
                        >
                            signup
                        </Link>
                    </p>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
