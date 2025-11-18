const express = require("express");
const app = express();
require("dotenv").config();
require("./models/db.js");
const cors = require("cors");

const allowedOrigins = [
    "http://localhost:5173", // Vite dev server
    "https://emp-mgmt-mern.onrender.com/" // Production frontend
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
})); //require for request from other source
app.use(express.json()); //require for post method request


const AuthRouter = require("./routes/AuthRouter.js")
app.use("/api/auth",AuthRouter)
const UserRouter = require("./routes/UserRouter.js");
app.use("/api/user",UserRouter)

app.get("/api/",(req,res)=>{
    console.log("hi");
    res.send("Hello World");
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is runnning at ${PORT}`)
})