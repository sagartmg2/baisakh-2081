import axios from "axios"
import React, { useEffect, useState } from "react"

export default function ProductSearch() {
    const [searchText, setSearchText] = useState("")
    const [limit, setLimit] = useState(30)
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get(
                `https://dummyjson.com/products/search?limit=${limit}&q=${searchText}`
            )
            .then((response) => {
                setProducts(response.data.products)
            })
    }, [searchText, limit])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/todos`).then((response) => {
            console.log("our api ",response);
        })
    },[])

    /* dependencies
        [] means component did Mount which runs only once. it doesnot run on component state change

        [searchText] means our useeffect is dependent on searchText variable
        and
        every time i chnage searchText, our useEffect re-runs
    */

    function handleChange(e) {
        if (e.target.name == "title") {
            setSearchText(e.target.value)
        } else if (e.target.name == "limit") {
            setLimit(e.target.value)
        }
    }

    console.log("re-render")

    return (
        <>
            <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="search"
            />

            <select name="limit" id="" onChange={handleChange}>
                <option value="30">max 30</option>
                <option value="50">max 50</option>
                <option value="100">max 100</option>
            </select>

            <div>ProductSearch</div>
            <h1>Products ({products.length})</h1>
            <ul>
                {products.map((el) => {
                    return <li>{el.title}</li>
                })}
            </ul>
        </>
    )
}
