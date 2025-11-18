const express = require("express");
const app = express();
require("dotenv").config();
require("./models/db.js");
const cors = require("cors");
app.use(cors()); //require for request from other source
app.use(express.json()); //require for post method request


const AuthRouter = require("./routes/AuthRouter.js")
app.use("/auth",AuthRouter)
const UserRouter = require("./routes/UserRouter.js");
app.use("/user",UserRouter)

app.get("/",(req,res)=>{
    console.log("hi");
    res.send("Hello World");
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is runnning at ${PORT}`)
})