const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

const pinRoutes = require('./routes/pins')
const userRoutes = require('./routes/users')


dotenv.config()

app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log("MongoDB Connected")
}).catch(err=> console.log(err));

app.use("/api/pins",pinRoutes);
app.use("/api/users",userRoutes);

app.listen(3001,() => {
    console.log("Backend server is running....")
});