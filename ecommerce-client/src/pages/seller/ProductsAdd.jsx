import React from "react"
import axios from "axios"
import { toast } from "react-toastify"

export default function ProductsAdd() {
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post("https://ecommerce-sagartmg2.vercel.app/api/products/", {
                name: e.target.name.value,
                price: e.target.price.value,
            },{
                headers:{
                  Authorization:`Bearer ${localStorage.getItem("access_token")}`
                }
            })
            .then(() => {
             
                toast("product created")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <form className="max-w-sm mt-8 mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label for="name" className="form-label">
                        Name *
                    </label>
                    <input
                        name="name"
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder=""
                        required
                    />
                </div>
                <div className="mb-5">
                    <label for="" className="form-label">
                        Price *
                    </label>
                    <input
                        name="price"
                        type="number"
                        min={0}
                        className="form-control"
                        placeholder=""
                        required
                    />
                </div>
                <div className="mb-5">
                    <label for="" className="form-label">
                        stock
                    </label>
                    <input
                        name="in_stock"
                        type="number"
                        min={0}
                        className="form-control"
                        placeholder=""
                        required
                    />
                </div>
                
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    add product
                </button>
            </form>
        </div>
    )
}
