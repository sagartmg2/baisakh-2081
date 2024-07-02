const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
app.use(cors())

mongoose
    .connect("mongodb://127.0.0.1:27017/mern")
    .then(() => console.log("DB Connected!"))

const Schema = mongoose.Schema
const TodoSchema = new Schema({
    title: String,
    status: Boolean,
})

const Todo = mongoose.model("Todo", TodoSchema)

/* 
    middleware
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

app.get("/api/todos", async function (req, res) {
    try {
        let todos = await Todo.find()
        console.log(todos)
        res.send(todos)
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            msg: "server error",
        })
    }
})

app.post("/api/todos", async function (req, res) {
    /* db.todos.insertOne(...}) */
    let todo = await Todo.create({
        title: req.body.title,
        status: false,
    })

    res.send(todo)
})

app.put("/api/todo/:id",() =>{
    Todo.findByIdAndUpdate(id,{
        ///
    })
    // code here to update 
})

app.delete("/api/todos-reset", async function (req, res) {
    await Todo.deleteMany({})
    res.send("todos deleted")
})

app.listen(8000, () => {
    console.log("server stared")
})

// localhost:8000/api/todos
