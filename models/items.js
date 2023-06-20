const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema(
    {
       title: {type: String, required: true, unique: true },
        description: {type : String,required: true},
        imgUrl: {type : String,required: true},
        size: {type : String},
        color: {type : String},
        price: {type: String, required: true},
       
        },

    { timestamps: true }
);

module.exports = mongoose.model("items",ItemSchema);
