require("dotenv").config();
const express=require("express");
const app=express();

const connectwithdatabase=require("./db/connectdb")
const port=process.env.PORT || 3000;
const router=require("./auth_router/router");

app.use("/ecommerce", router);

connectwithdatabase().then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})





