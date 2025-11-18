const mongoose = require("mongoose");

mongoose.connect(process.env.DB_Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{console.log(process.env.DB_Uri,"- connected")})
.catch((error)=>{console.error("Connection error:", error); console.log(process.env.DB_Uri," not connected")});

mongoose.set('debug', true);
