const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

/* middleware
    a function which has access to request and response
    it can also change request and response
    and also has access to next upcomming valid middleware
    runs prior to our routes
*/

let isLogged = true
let user = { name: "ram" }
function checkAuthentication(req, res, next) {
    console.log("check authenctiona")
    if (!isLogged) {
        res.status(401).send("un auhtnenticated.")
    } else {
        req.user = user // we can change request from middleware
        next()
    }
}

/* global middleware */
app.use(express.json()) // express.json = () => (req,res,next) =>{ req.body = postman body  }
app.use(checkAuthentication)

let dbTodos = [
    { title: "html", status: true },
    { title: "css", status: true },
]

app.get("/api/todos", function (req, res) {
    res.send(dbTodos)
})

app.post("/api/todos", function (req, res) {
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
