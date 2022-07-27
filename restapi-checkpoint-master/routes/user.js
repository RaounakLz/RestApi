const express=require("express");
const User = require("../Models/user");
const userRouter=express.Router();

//post user
userRouter.post("/add",async(req ,res)=>{
    try{
         let newUser = new User(req.body);
         let result= await newUser.save();
         res.send({ user:result, msg:"user is added"});
    }
    catch (error){
        console.log(error);
    }
    });
//get all user
userRouter.get("/",async(req ,res)=>{
    try{
        
         let result= await User.find();
         res.send({ user:result, msg:" all user  "});
    }
    catch (error){
        console.log(error);
    }
    });
//delete user
userRouter.delete("/:id",async(req ,res)=>{
    try{ 
         let result= await User.findByIdAndDelete(req.params.id);
         res.send({ user:result, msg:" user is deleted "});
    }
    catch (error){
        console.log(error);
    }
    });

module.exports = userRouter;

// update user
userRouter.put("/:id",async(req ,res)=>{
    try{ 
         let result= await User.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}});
         res.send({ user:result, msg:" user is updated "});
    }
    catch (error){
        console.log(error);
    }
    });

module.exports = userRouter;
