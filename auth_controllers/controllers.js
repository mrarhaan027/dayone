require("dotenv").config()
const product =require("../auth_schema/schema")

const api=async(req, res)=>{

// const mydata = await product.find({})  // find all data from database

//const mydata = await product.find({name:"VR Headset"})  // find name


// const mydata=await product.find(req.query)  // find data from database using query search in url 
//http://localhost:3000/apicreate/api?name=iphone

const {company , name , sort , select , limit , count}=req.query;
const queryobject={};


if(company){
    queryobject.company=company;
    //http://localhost:3000/apicreate/api?company=apple
    console.log(queryobject)
}
if(name){
    queryobject.name=name;
       //http://localhost:3000/apicreate/api?name=iphone&company=apple  // only one name get
       console.log(queryobject)
}
if(name){
    queryobject.name={$regex:name , $options:"i"};
     //http://localhost:3000/apicreate/api?company=apple   // all names get inside the values fields
     console.log(queryobject)
}

let apidata=product.find(queryobject) // sorting

if(sort){
    
    let sortfix=sort.replace("," , " ");
    
    apidata=apidata.sort(sortfix)
   // http://localhost:3000/apicreate/api?sort=name and http://localhost:3000/apicreate/api?sort=-name
    // queryobject.sort=sortfix;
}

if(select){
  //  let selectfix=select.replace("," , ""); // => http://localhost:3000/apicreate/api?select=name   only one field  one value get
 
  let selectfix=select.split(",").join(" ");   // => http://localhost:3000/apicreate/api?select=name   many  fields  many values  get
    apidata=apidata.select(selectfix)  
}

// pagination ..

let page=Number(req.query.page) || 1       // http://localhost:3000/apicreate/api?page=3
let limits=Number(req.query.limits)  || 10;
let skip=(page-1)*limits 

apidata=apidata.skip(skip).limit(limits)

if(limit){
    let limitfix=parseInt(limit) // convert limit to integer
    apidata=apidata.limit(limitfix) // limit data to 2
    //http://localhost:3000/apicreate/api?sort=name&select=name&limit=2
}

if(count){
    let countfix=parseInt(count) // convert count to integer
    apidata=apidata.countDocuments(countfix) // count data to 2
}

const myproducts=await apidata.sort(sort) // sorting

// const myproducts=await product.find(queryobject)

res.status(200).json({myproducts , totalproducts:myproducts.length})
//res.status(200).send("this is controlers page here")
}


module.exports=api;