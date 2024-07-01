import React, { useEffect, useState } from "react"
import axios from "axios"

export default function TodoList() {
    const [todos, setTodos] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        axios.post("http://localhost:8000/api/todos", {
            title: "from react",
        })
        .then()
        .catch(err =>{
            console.log("error",err);
        })
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/todos").then((res) => {
            setTodos(res.data)
        })
    }, [])

    return (
        <>
            <div>TodoList</div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button>add new</button>
            </form>
            <ul>
                {todos.map((el) => {
                    return <li>{el.title}</li>
                })}
            </ul>
        </>
    )
}
