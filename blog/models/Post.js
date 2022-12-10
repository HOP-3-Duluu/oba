const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const blogShema = new Schema({
    title: {
        type: String,
        maxLen: 25,
        minLen: 5,
        required: [true, "Zaaval buglunu uu"],
    },
    body: {
        type: String,
        required: [true, "Zaaval buglunu uu"]
    },
    coverIage: {
        type: String,
    },
    author: {
        type: Schema.ObjectId,
        ref: "Users",
        required: true
    }
})

const Blog = model("blog", blogShema);

module.exports = Blog;