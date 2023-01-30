import "colors"
import mongoose from "mongoose"
import dotenv from "dotenv" 
dotenv.config({path:"../.env"})
mongoose.set('strictQuery', false);
const DB = "mongodb+srv://niladri:niladri@cluster0.tfubwl4.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB).then(()=>console.log("Connection Successful".bgGreen.white)).catch((e)=>console.log(e));

