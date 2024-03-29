const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgon = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");


dotenv.config()
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL , {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("connected to Mongodb");
});

//middle
app.use(express.json());
app.use(helmet());
app.use(morgon("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800,() =>{
    console.log("backend is running thanks");
})

