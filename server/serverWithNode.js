const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New request recieved - ${url.parse(req.url).pathname}\n`
    fs.appendFile("log.txt", log, (err) => {

        switch (url.parse(req.url).pathname) {
            case '/':
                res.end("Welcome to homepage");
                break
            case '/favicon.ico':
                res.setHeader("Content-Type", "image/png");
                fs.readFile("image.png", (err, data) => {
                    res.end(data)
                })
                break
            case '/login':
                res.end("enter login detials");
                break
            case '/signup':
                res.end("signup details");
                break
            default:
                res.end("404 Not found");
                break
        }
    })
});


myServer.listen(8000);
console.log("Server running")