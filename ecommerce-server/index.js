const express = require("express")
require("./config/database")
const authRoute = require("./route/auth")
const productRoute = require("./route/product")
const jwt = require("jsonwebtoken")

const app = express()
/* global middleware */
app.use(express.json()) // => () =>{}
// app.use(checkAuthentication)

app.use("/api", authRoute)
app.use("/api/products", productRoute)

app.get("/api/test", function (req, res) {
    let token = jwt.sign(
        {
            _id: "66a8c38f36aea367f0a46b2a",
            name: "ram",
            email: "ram1@gmail.com",
            role: "buyer",
        },
        "asdf"
    )
    res.send(token)
})

app.listen(8000, () => {
    console.log("server started.")
})
