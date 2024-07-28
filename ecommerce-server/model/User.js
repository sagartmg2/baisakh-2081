const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
})

const User = mongoose.model("User", userSchema)

/* default export */
// export default User
module.exports = User
