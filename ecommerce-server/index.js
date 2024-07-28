const express = require("express")
require("./config/database")
const authRoute = require("./route/auth")

const app = express()
/* global middleware */
app.use(express.json())
app.use("/api",authRoute)

app.get("/api/test", function (req, res) {
    res.send("test successfull")
})

app.get("/api/products", async function (req, res) {
    res.send("products list")
})
app.post("/api/products", async function (req, res) {
    res.send("create products")
})
app.put("/api/products/:id", async function (req, res) {
    res.send("create products")
})
app.delete("/api/products/:id", async function (req, res) {
    res.send("create products")
})

app.listen(8000)
