//imports the mongoose package, which is a MongoDB object modeling tool for Node.js.
const mongoose = require("mongoose");


//defines an ItemSchema using mongoose.Schema.
const ItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: String, required: true },
  },

  { timestamps: true }
);

// exports the Mongoose model for the "Item" schema
module.exports = mongoose.model("items", ItemSchema);
