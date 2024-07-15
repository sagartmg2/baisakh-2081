import React from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom"


export default function Login() {
    return (
        <div>
            <Header />
            <div className="container mt-20 ">
                <form className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label for="email" className="form-label">
                            Your email
                        </label>
                        <input
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
                            type="password"
                            id="password"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="form-control"
                                required
                            />
                        </div>
                        <label
                            for="remember"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Remember me
                        </label>
                    </div>
                    <p className="my-4 ">new user ?  <Link to="/signup" className="hover:underline text-blue-500">signup</Link></p>
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
