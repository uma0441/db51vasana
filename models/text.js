const mongoose = require("mongoose")
const textSchema = mongoose.Schema({
    Color: String,
    Font: {type:String, required:true},
    Size: {type:Number, required:true, min:8, max:72}
})
module.exports = mongoose.model("text", textSchema)