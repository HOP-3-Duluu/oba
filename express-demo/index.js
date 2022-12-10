const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

const fileUpload = require("express-fileupload");
const path = require("path");
require("dotenv").config();
console.log(process.env);

app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(postRouter);
app.use(userRouter);
app.use("/uploads/", express.static(path.join(__dirname, "uploads")));

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
  autoIndex: true,
});
const connection = mongoose.connection;


app.post("/upload", async (req, res) => {
  if (!req.files) {
    res.send("No file");
  }
  const file = req.files.file;
  const uploadDir = __dirname + "/uploads/" + file.name;

  console.log(uploadDir);

  file.mv(uploadDir, function (err) {
    console.log(err);
    if (err) res.status(400).send("Error");

    res.send({
      message: "Uploaded",
      fileUrl: file.name,
    });
  });
});

connection.once("open", () => {
  console.log("Successfully connected to MongoDB server");
});

app.listen(3001, () => {
  console.log("web server is running on port 3001");
});