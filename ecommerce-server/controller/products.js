const jwt = require("jsonwebtoken")
const Product = require("../model/Product")
const path = require("path")

const fetchProduct = (req, res) => {
    res.send("products fetched")
}

const store = async (req, res) => {
    try {
        let uplaodFile = req.files?.image
        let image = ""
        if (uplaodFile) {
            console.log(uplaodFile.name)
            let fileName = path.basename(uplaodFile.name)
            let extension = path.extname(uplaodFile.name)
            let rootPath = path.resolve()
            let finalpath = path.join(
                rootPath,
                "uploads",
                `${fileName}-${Date.now()}${extension}`
            )
            console.log({ finalpath })
            image = finalpath
            req.files.image.mv(finalpath, (err) => {
                console.log("error in uplading iamge", err)
            })
        }
        let product = await Product.create({
            ...req.body,
            user: req.user._id,
            image: image,
        })
        res.send(product)
    } catch (err) {
        return res.status(500).send({
            msg: "server error",
            err: err,
        })
    }
}

const update = (req, res) => {
    /* TODO: update only self products */
    res.send("product updateed")
}

const remove = (req, res) => {
    /* TODO: udpate only self products */
    res.send("product removeed")
}

module.exports = {
    fetchProduct,
    store: store,
    update,
    remove,
}
