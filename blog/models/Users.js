const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userShema = new Schema({
    username: String,
    email: String,
    password: String,
    profileImage: String,
})

const User = model("Users", userShema);

module.exports = User;