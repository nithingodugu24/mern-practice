const express = require("express");
const cookie_parser = require("cookie-parser");
const connectMongoDb = require("./connection");
const verifyUser = require("./middlewares/auth");


const urlRoutes = require("./routes/url");
const staticRoutes = require("./routes/staticRoutes");
const userRoutes = require("./routes/userRoutes");



const app = express();
const PORT = 8000;

connectMongoDb("mongodb://127.0.0.1:27017/url-shortener").then(()=>console.log("Mongodb connected"));

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookie_parser());


// app.use("/", staticRoutes);
app.use("/", userRoutes);
app.use("/", verifyUser, urlRoutes);



app.listen(PORT, ()=>console.log(`Server running at Port: ${PORT}`));