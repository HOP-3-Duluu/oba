const express = require('express')
const app = express()

app.use(express.json());

var users = [
    { name: 'bekku', email: 'bekku@gmail.com', password: 'bekku' },
    { name: 'bek', email: 'bek@gmail.com', password: 'bek' },
    { name: 'oba', email: 'oba@gmail.com', password: 'oba' },
];

app.post("/user", (req, res) => {
    users.push(req.body);
    console.log(users);
    res.send("user created");
});

app.put("/user", (req, res) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email) {
            users[i].name = req.body.name;
            users[i].password = req.body.password;
            break;
        }
    }
    console.log(users)
    res.send("user not found")
})

app.delete("/user", (req, res) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email && users[i].name === req.body.name) {
            deleteUser = users.filter(x => x.email != users[i].email)
            console.log(deleteUser);
            break;
        }
    }
    res.send("User deleted")
})

app.get("/", (req, res) => {
    res.send("Main window");
});

app.get("/greet/:name", (req, res) => {
    res.send("Hello, " + req.params.name);
});

app.listen(3000, () => {
    console.log("server is running");
});