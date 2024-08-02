const jwt = require("jsonwebtoken")
const Product = require("../model/Product")
const path = require("path")

const fetchProduct = async (req, res) => {
    // let products = await Product.find({name:"watch"})
    let serachTerm = req.query.search || ""
    let sort = {
        createdAt:-1
    }

    if(req.query.sort){
        if(req.query.sort === "dateAsc"){
            sort = {
                createdAt:1
            }
        }else if(req.query.sort === "dateDesc"){
            sort = {
                createdAt:-1
            }
        }else if(req.query.sort === "nameAsc"){
            sort = {
                name:1
            }
        }else if(req.query.sort === "nameDesc"){
            sort = {
                name:-1
            }
        }
    }

    console.log(serachTerm)
    let products = await Product.find({name:RegExp(serachTerm,"i")})
    .sort(sort)
    res.send(products)

    /* 
        mongodb query operators
            $match
            $and
            $or
    */
}

const store = async (req, res) => {
    try {
        let uplaodFile = req.files?.image
        let image = ""
        if (uplaodFile) {
            console.log(uplaodFile.name)
            let fileName = path.parse(uplaodFile.name).name
            let extension = path.extname(uplaodFile.name)
            let rootPath = path.resolve()
            fileName = `${fileName}-${Date.now()}${extension}`
            let finalpath = path.join(rootPath, "uploads", fileName)
            image = "/uploads/" + fileName
            req.files.image.mv(finalpath, (err, data) => {
                if (err) {
                    console.log("error in uplading iamge", err)
                }
                if (data) {
                    console.log("file uploaded")
                }
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
