const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
  });

const Product = mongoose.model('Product', productSchema);
