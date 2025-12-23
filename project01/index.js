const express = require("express");
const userRoutes = require("./routes/user");
const { connectMongoDb } = require('./connection');
const { logRequest } = require("./middlewares")

const app = express();
const port = 8000;

//Mongodb Connection
connectMongoDb('mongodb://127.0.0.1:27017/mern_1').then(()=>{
    console.log("Mongodb Connected");
});

app.disable("x-powered-by")
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(logRequest('log.txt'));


app.use("/api/users", userRoutes);

app.listen(port, () => {
    console.log(`Server running at Port: ${port}`)
})