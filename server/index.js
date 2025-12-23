const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`<b>Hello world</b> \n<input type="text" placeholder="Enter name"/>`)
})


app.get("/user", (req, res) => {
    res.setHeader("Set-Cookie", "endhiBro=123")
    res.send({
        firstName: "Nithin Godugu",
        hasLogged: true,
    })
})

app.get("/greet", (req, res) => {
    res.send("Hello " + req.query.name)
})

app.listen(8000, () => {
    console.log("Server Running")
})