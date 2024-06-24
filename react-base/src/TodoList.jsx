import React, { useState } from "react"

export default function TodoList() {
    const [todos, setTodos] = useState(["html", "css", "js", "react"])

    function addNewTodo(e) {
        e.preventDefault() // prevents page refresh
        console.log(e.target)
        let newTodo = e.target.title.value

        // todos.push("new todo") // state cant be modifed directly

        // let temp = todos // refrence variable. temp and todos points to same location in memory
        let temp = [...todos]
        temp.push(newTodo) 

        setTodos(temp)

        e.target.title.value = ""
    }

    return (
        <>
            <div>TodoList</div>
            <form onSubmit={addNewTodo}>
                <input type="text" name="title" />
                <button>add new todo</button>
            </form>
            <hr />
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </>
    )
}
