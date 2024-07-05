import axios from "axios"
import React, { useEffect, useState } from "react"

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [todoToBeUpdated, setTodoToBeUpdated] = useState(null)
    const [inputText, setInputText] = useState("")

    useEffect(() => {
        // setInputText(todoToBeUpdated ? todoToBeUpdated.title || "")
        setInputText(todoToBeUpdated?.title || "")
    }, [todoToBeUpdated])

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
        let url = "http://localhost:8000/api/todos"
        let method = "post"

        if (todoToBeUpdated) {
            method = "put"
            url = `http://localhost:8000/api/todos/${todoToBeUpdated._id}`
        }

        // axios[method](url, {
        //     title: e.target.title.value,
        // })

        axios({
            method: method,
            url: url,
            data: {
                title: e.target.title.value,
            },
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
    const deleteTodo = (todoId) => {
        axios
            .delete(`http://localhost:8000/api/todos/${todoId}`)
            .then((res) => {
                fetchTodos()
            })
            .catch((err) => {
                if (err.response.status == 400) {
                    alert("please check your form")
                } else if (err.response.status == 500) {
                    alert(err.response.data.msg)
                }
            })
    }
    function editTodo(todo) {
        // document.getElementById("title").value = todo.title
        setTodoToBeUpdated(todo)
    }

    // alert("asdf")
    // prompt("Edit todo title:")

    return (
        <>
        
            <div>TodoList</div>
            <form onSubmit={handleSubmit}>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value)
                    }}
                />
                <button>{todoToBeUpdated ? "update" : "create"}</button>
                {todoToBeUpdated && (
                    <button
                        onClick={() => {
                            setTodoToBeUpdated(null)
                        }}
                    >
                        canceal updatre
                    </button>
                )}
            </form>
            <ul style={{listStyle:"none"}}>
                {todos.map((todo) => {
                    return (
                        <li key={todo._id}>
                            <input type="checkbox"/>
                            {todo.title}{" "}
                            <button
                                onClick={() => {
                                    editTodo(todo)
                                }}
                            >
                                edit
                            </button>
                            <button
                                onClick={() => {
                                    deleteTodo(todo._id)
                                }}
                            >
                                delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
