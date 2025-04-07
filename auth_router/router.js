const express=require("express");
const router=express.Router();

const api=require("../auth_controllers/controllers")

router.route("/api").get(api)

module.exports=router;