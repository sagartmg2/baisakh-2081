import axios from "axios"
import React, { useEffect, useState } from "react"

export default function TodoList() {
    const [todos, setTodos] = useState([])

    function fetchTodos() {
        axios
            .get("http://localhost:8000/api/todos")
            .then((res) => {
                setTodos(res.data)
            })
            .catch((err) => {
                if (err.response.status == 400) {
                    alert("please check your form")
                } else if (err.response.status == 500) {
                    alert(err.response.data.msg)
                }
            })
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:8000/api/todos", {
                title: e.target.title.value,
            })
            .then((res) => {
                fetchTodos()
                e.target.title.value = ""
            })
            .catch((err) => {
                if (err.response.status == 400) {
                    alert("please check your form")
                } else if (err.response.status == 500) {
                    alert(err.response.data.msg)
                }
            })
    }

    // axios.delete("localhost:8000/api/todos/6683e0b0a3373abba4c6dfcb")

    return (
        <>
            <div>TodoList</div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" />
                <button>create new </button>
            </form>
            <ul>
                {todos.map((todo) => {
                    return <li key={todo._id}>{todo.title} <button>delete</button></li>
                })}
            </ul>
        </>
    )
}
