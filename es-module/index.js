// const product = require("./product")
// import product from "./product.js"
import { createProduct, deleteProduct } from "./product.js"
import register from "./auth.js"
register()

createProduct()
deleteProduct()
