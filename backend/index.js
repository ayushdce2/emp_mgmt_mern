const express = require("express");
const app = express();
require("dotenv").config();
// require("./models/db.js")(app);
const { MongooseDBConnectionFunction } = require("./models/db.js");
MongooseDBConnectionFunction(app); //to check if db is connected
const cors = require("cors");

// const allowedOrigins = [
//     "http://localhost:5173", // Vite dev server
//     "https://emp-mgmt-mern.vercel.app" // Production frontend
// ];

// app.use(cors({
//     origin: function (origin, callback) {
//         // Allow requests with no origin (like mobile apps or curl requests)
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true
// })); //require for request from other source


// app.options("*", cors()); // Allow browser preflight requests
app.use(cors());
app.use(express.json()); //require for post method request

const { isDbConnected } = require("./middlewares/isDbConnected.js");
app.use(isDbConnected);//to check if db is connected

const AuthRouter = require("./routes/AuthRouter.js");
app.use("/api/auth",AuthRouter);
const UserRouter = require("./routes/UserRouter.js");
app.use("/api/user",UserRouter);
const AdminRouter = require("./routes/AdminRouter.js");
app.use("/api/admin",AdminRouter);
const HrRouter = require("./routes/HrRouter.js");
app.use("/api/hr",HrRouter);

app.get("/api/",(req,res)=>{
    console.log("hi");
    res.send("Hello World");
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is runnning at ${PORT}`)
})