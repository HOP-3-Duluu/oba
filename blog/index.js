const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/Post");
const app = express();
const User = require("./models/Users")

app.use(express.json());

// const MONGODB_URL = "mongodb://localhost:27017/express_db";
const MONGODB_URL = "mongodb+srv://Oyunbaatar:<password>@cluster0.dreigp3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL);
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Succesfully connected to MongoDB server")
});

app.get('/', async (req, res) => {
    const users = await User.find().lean();
    res.send({
        user: users,
    });
})

app.get("/blog", async (req, res) => {
    const posts = await Blog.find().populate("author");
    res.send({
        data: posts,
    })
})

app.post("/blog", async (req, res) => {
    const { title, body, coverImage, userId } = req.body
    try {
        const post = await Blog.create({
            title,
            body,
            coverImage,
            author: userId,
        })
        res.send({
            message: "Post addded"
        })
    } catch (e) {
        res.send({
            error: e,
        })
    }
})



app.put("/users", async (req, res) => {
    const { username, email, password, id } = req.body;
    const user = await User.findOne({ _id: id }).exec();
    let message;
    if (!user) {
        message = "User not found";
    } else {
        user.username = username;
        user.password = password;
        user.save();
        message = "Updated user info"
    }

    res.send({
        message,
    });
});

app.delete("/users", async (req, res) => {
    const { username, email, password, id } = req.body;
    const user = await User.findOne({ _id: id }).exec();
    let message;
    if (!user) {
        message = "User not found";
    } else {
        user.delete();
        message = "User deleted"
    }

    res.send({
        message,
    });
});


app.post('/users', async (req, res) => {
    const { username, email, password } = req.body;
    const user = await User.create({
        username: username,
        email,
        password,
    });
    res.send({
        message: "User added"
    })
})



app.listen(3000, () => {
    console.log("web server is running on pc")
})