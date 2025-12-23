const express = require("express");
const connectMongoDb = require("./connection")
const urlRoutes = require("./routes/url");


const app = express();
const PORT = 8000;

connectMongoDb("mongodb://127.0.0.1:27017/url-shortener").then(()=>console.log("Mongodb connected"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", urlRoutes);

app.listen(PORT, ()=>console.log(`Server running at Port: ${PORT}`));