import express from "express"
import dotenv from "dotenv"
import "colors"
import cors from "cors"
import cookieParser from "cookie-parser"
import fs from "fs"
import morgan from "morgan"
import path from "path"
import "./database/connection.js"
import productRoutes from "./router/pizza.js"

//to add all pizzas
import { addAllProductsToDatabase } from "./addPizzasInDatabase.js" 

const __dirname = path.resolve();
dotenv.config({path:"./.env"})


const PORT = process.env.PORT || 5000;
const app=express();
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())
app.use("/products",productRoutes)



app.get("/",(req,res)=>res.send(`<h1>Hello from Node</h1>`))

app.listen(PORT,()=>{
    console.log("Server is running".green)
})

addAllProductsToDatabase()