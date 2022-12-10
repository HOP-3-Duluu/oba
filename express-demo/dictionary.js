const express = require('express')
const app = express()

app.use(express.json());

var dictionary = {
    "window": "Цонх",
    "open": "ongoilgoh",
    "car": "mashin",
}

app.get("/:search_word", (req, res) => {
    if (dictionary.hasOwnProperty(req.params.search_word)) {
        res.send(dictionary[req.params.search_word])
    }
    res.send({
        message: "word not found"
    })
})

app.delete("/delete_word", (req, res) => {
    console.log(dictionary)
    for (const i in dictionary) {
        if (Object.keys(req.body)[0] === `${i}`) {
            delete dictionary[i]
            res.send("word deleted")
            console.log(dictionary)
            break;
        } else {
            console.log("bhgu bn")
        }
    }
})

app.post("/add_word", (req, res) => {
    addWord = {
        ...dictionary,
        ...req.body
    }
    console.log(addWord)
    console.log({
        message: "word added"
    })
})

app.put("/edit_word", (req, res) => {
    for (const i in dictionary) {
        if (Object.keys(req.body)[0] === `${i}`) {
            dictionary[i] = Object.values(req.body)[0]
            res.send("word edited")
            console.log(dictionary)
        } else {
            console.log("bhgu bn")
        }
    }
})

app.get("/", (req, res) => {
    res.send("Main window");
});
app.listen(3000, () => {
    console.log("server is running");
});