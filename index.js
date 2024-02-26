import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./API/user.routes.js";

dotenv.config();
const App = express();

App.use(express.json());

await mongoose.connect(process.env.MONGODBURL ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err=> console.log(err))

App.get("/",(req,res)=>{
    res.send("hello World");
})

App.use("/users ", router)
const port = 5000;

App.listen(port,()=>{
    console.log(`server is listening on port: ${port}`);
});