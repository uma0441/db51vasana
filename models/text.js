const mongoose = require("mongoose")
const textSchema = mongoose.Schema({
    Color: String,
    Font: String,
    Size: Number
})
module.exports = mongoose.model("Text",
    textSchema)