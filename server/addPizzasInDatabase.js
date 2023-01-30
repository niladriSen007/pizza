import pizzas from "./constants/pizzaData.js";
import PizzaDetails from "./models/pizzaDetails.js";

export const addAllProductsToDatabase = async() =>{
    try
    {
        await PizzaDetails.deleteMany({})
        const allProducts = await PizzaDetails.insertMany(pizzas)
    //     console.log(allProducts);
     }
    catch(e)
    {
        console.log(e);
    }
}