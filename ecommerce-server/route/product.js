const express = require("express")
const {
    store,
    update,
    remove,
    fetchProduct,
} = require("../controller/products")
const {
    checkAuthentication,
    checkIsSeller,
} = require("../middleware/checkAuthentication")
const router = express.Router()

router.get("", fetchProduct)
router.post("", checkAuthentication, checkIsSeller, store) // route level middleware
router.put("", checkAuthentication, checkIsSeller, update)
router.delete("", checkAuthentication, checkIsSeller, remove)

module.exports = router
