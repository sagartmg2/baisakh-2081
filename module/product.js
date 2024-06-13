const createProduct = () => {
    console.log("product created")
}

const deleteProduct = () => {
    console.log("product deleteProduct")
}

const editProduct = () => {
    console.log("product edited")
}

// module.exports = createProduct
// module.exports = deleteProduct

module.exports = {
    "createProduct":createProduct,
    deleteProduct
}
