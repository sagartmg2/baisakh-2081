const jwt = require("jsonwebtoken")

const store = (req, res) => {
    /* access token */
    /* verify token */
    try {
        let token = req.headers.authorization.replace("Bearer ", "")
        const JWT_SECRETE_KEY = "shhhhh"
        const decoded = jwt.verify(token, JWT_SECRETE_KEY)
        console.log(decoded)
    } catch {
        return res.status(401).send({
            msg: "unauntenticated",
        })
    }

    res.send("product storeed")
}

const update = (req, res) => {
    res.send("product updateed")
}

const remove = (req, res) => {
    res.send("product removeed")
}

module.exports = {
    store: store,
    update,
    remove,
}
