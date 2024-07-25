import React, { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"

export default function ProductsUpsert() {
    const [productDetail, setproductDetail] = useState({
        name: "",
        price: 0,
        in_stock: 0,
    })

    const params = useParams()
    let slug = params.slug

    const handleSubmit = (e) => {
        e.preventDefault()

        let method = "POST"
        let url = "https://ecommerce-sagartmg2.vercel.app/api/products/"

        if (slug) {
            method = "PUT"
            url = `https://ecommerce-sagartmg2.vercel.app/api/products/${slug}`
        }

        axios({
            method,
            url,
            data: productDetail,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
        })
            .then(() => {
                toast("product created")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (params.slug) {
            axios
                .get(
                    `https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`
                )
                .then((res) => {
                    setproductDetail(res.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [])

    const handleChange = () => {}

    return (
        <div>
            {JSON.stringify(productDetail)}
            <form className="max-w-sm mt-8 mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="form-label">
                        Name *
                    </label>
                    <input
                        name="name"
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder=""
                        required
                        value={productDetail.name}
                        onChange={(e) => {
                            setproductDetail({
                                ...productDetail,
                                name: e.target.value,
                            })
                        }}
                        onchange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="" className="form-label">
                        Price *
                    </label>
                    <input
                        name="price"
                        type="number"
                        min={0}
                        className="form-control"
                        placeholder=""
                        required
                        value={productDetail.price}
                        onChange={(e) => {
                            setproductDetail({
                                ...productDetail,
                                price: e.target.value,
                            })
                        }}
                        onchange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="" className="form-label">
                        stock
                    </label>
                    <input
                        name="in_stock"
                        type="number"
                        min={0}
                        className="form-control"
                        placeholder=""
                        required
                        value={productDetail.in_stock}
                        onChange={(e) => {
                            setproductDetail({
                                ...productDetail,
                                in_stock: e.target.value,
                            })
                        }}
                        onchange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {params.slug ? "update product" : "add product"}
                </button>
            </form>
        </div>
    )
}
