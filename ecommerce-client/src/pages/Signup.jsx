import React, { useState } from "react"
import Header from "../components/Header"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Signup() {
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    })

    const [formError, setFormError] = useState({})
    const navigate = useNavigate() // return () =>{}
    const [isSubmittting, setisSubmittting] = useState(false)

    const handleSubmit = (e) => {
        setFormError({})
        e.preventDefault()
        setisSubmittting(true)
        axios
            .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                role: e.target.role.value,
            })
            .then(() => {
                // redirect to login
                // window.location = "/login"
                toast("singup success")
                navigate("/login")
            })
            .catch((err) => {
                console.log(err)
                // show erros
                console.log(err.response?.data?.errors)
                /*  
                    [{param:"email",msg:"alrady used"},{param:"password",msg:"alleats 8 charts"}]

                    convert above erros array to following object and change error STAte

                    {
                        email:"already used",
                        password:"alteast 8 chars"
                    }
                */

                if (err?.response?.status == 400) {
                    setFormError({
                        email: "already used",
                        password: "alteast 8 chars",
                    })
                }

                setisSubmittting(false)

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
                        <span className="text-red-400 text-sm">
                            {formError.email}
                        </span>
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
                        <span className="text-red-400 text-sm">
                            {formError.password}
                        </span>
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
                        disabled={isSubmittting}
                        type="submit"
                        className="text-white disabled:cursor-no-drop disabled:bg-blue-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
