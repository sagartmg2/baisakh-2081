const jwt = require("jsonwebtoken")

const fetchProduct = (req, res) => {
    res.send("products fetched")
}
const store = (req, res) => {
    res.send("product storeed")
}

const update = (req, res) => {
    res.send("product updateed")
}

const remove = (req, res) => {
    res.send("product removeed")
}

module.exports = {
    fetchProduct,
    store: store,
    update,
    remove,
}
