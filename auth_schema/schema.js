const mongoose =require("mongoose");

const apichema=new mongoose.Schema({    
    name:{
        type:String,required:true
    },
    description:{
        type:String,required:true
    },
    price:{
        type:Number,required:true
    },
    rating:{
        type:Number,required:true
    },
    company:{
        type:String,required:true
        },
        
    image:{
        type:String,required:true
    }
    });
const apicteare= mongoose.model("projectapi", apichema);
    module.exports=apicteare;
