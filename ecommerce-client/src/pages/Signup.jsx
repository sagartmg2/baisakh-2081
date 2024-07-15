import React, { useState } from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const [formFields, setFormFields] = useState({
        name:"",
        email:"" ,
        password:"",
        role:""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value,
        }).then(() =>{
            // redirect to login
            // window.location = "/login"
            toast("singup success");
        }).catch((err) =>{
            // show erros
            console.log(err);
            toast.error("soemthing went wrong")
        })
    }
    return (
        <div>
            <Header />
            <div className="container mt-20 ">
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="form-label">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="form-label">
                            Your email*
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="name@flowbite.com"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="form-label">
                            Your password*
                        </label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="role" className="form-label">
                            Role*
                        </label>
                        <select name="role" id="" className="form-control">
                            <option value="buyer">buyer</option>
                            <option value="seller">seller</option>
                        </select>
                    </div>
                    <p className="my-4 ">
                        alraedy a user ?{" "}
                        <Link
                            to="/login"
                            className="hover:underline text-blue-500"
                        >
                            login
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
            <ToastContainer />
        </div>
    )
}
