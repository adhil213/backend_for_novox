import mongoose from "mongoose";



const schema= new mongoose.Schema({
  name:{
    type:String
  },
  email:{
    type:String,
    unique:true
  },
  password:{
    type:Number
  },
  role:{
    type:String
    
  }


})
const model= mongoose.model("student",schema)

export default model