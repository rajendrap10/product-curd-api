const mongoose = require("mongoose")
const { Schema } = mongoose;

const productSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  price: Number,
  quantity:   Number,
  description: String
});

module.exports = mongoose.model("Product", productSchema);