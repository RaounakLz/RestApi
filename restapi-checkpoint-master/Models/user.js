const mongoose=require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name: String,
    email:{type:String , unique:true},
    phone:Number,
    age:Number

});
   

const User = mongoose.model("User",userSchema);
module.exports= User;