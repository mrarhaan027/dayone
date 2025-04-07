const mongoose=require("mongoose");

const URI=process.env.API_KEY;

mongoose.connect(URI);

const connectwithdatabase=async()=>{
try {
    await mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("connection is successful")
} catch (error) {
   console.log("connection is feild") 
}
}
module.exports=connectwithdatabase;
