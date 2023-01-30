import  express  from "express";
import PizzaDetails from "../models/pizzaDetails.js";
const router = express.Router();

//fetch all products
router.get("/",async(req,res)=>{
    try
    {
        const pizzas = await PizzaDetails.find();
        res.status(200).send(pizzas)
    }
    catch(e)
    {
        res.send(402).json({message:"Error while fetching products"});
        console.log(e);
    }
})

export default router;