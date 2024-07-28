const User = require("../model/User")

async function signup(req, res) {
    let user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    res.send(user)
}

async function login(req, res) {
    let user = await User.find({})
    /* check password  */
    /* send token*/
    res.send("logged in")
}

module.exports = {
    login: login,
    signup: signup,
}
