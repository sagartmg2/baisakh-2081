const express = require("express")
const app = express()

app.use(express.json()) // middleware

// app.use((req,res) =>{
//   console.log("inside middleware.");
//   res.status(401).send("not logged in ")
// })

let dbTodos = [
    { title: "html", status: true },
    { title: "css", status: true },
]

app.get("/", function (req, res) {
    res.send("Hello Worldddd")
})

app.get("/api/todos", function (req, res) {
    console.log("get todos")
    res.send(dbTodos)
})

app.post("/api/todos", function (req, res) {
    console.log(req.body)
    console.log("post todos")
    dbTodos.push({
        title: req.body.title,
        status: false,
    })
    res.send("todos created")
})

app.delete("/api/todos", function (req, res) {
    dbTodos = []
    res.send("todos deleted")
})

app.listen(8000, () => {
    console.log("server stared")
})

// localhost:8000/api/todos
