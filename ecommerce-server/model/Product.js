const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
        },
        description: String,
        user: {
            required: true,
            type: ObjectId,
            ref: "User",
        },
        image: String,
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model("Product", productSchema)
module.exports = Product
