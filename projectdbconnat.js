
require("dotenv").config()
const connectdatabase=require("./db/connectdb");
const products=require("./auth_schema/schema");
const projectjson=require("./product.json");


const start=async()=>{
try {
    await connectdatabase(process.env.API_KEY)
    await products.deleteMany()  // delete all data in collection inside the json
    await products.create(projectjson)
    console.log("successfull")
} catch (error) {
  console.log("try again")  
}
}
start();