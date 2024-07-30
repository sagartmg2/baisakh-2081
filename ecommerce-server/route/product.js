const express = require("express")
const { store, update, remove } = require("../controller/products")
const router = express.Router()

router.post("", store)
router.put("", update)
router.delete("", remove)

module.exports = router
