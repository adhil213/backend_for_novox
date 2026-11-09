import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


export function connectdb(){
  try {

    mongoose.connect(process.env.MONGODBURL)
    console.log("mongodb connected")
    
  } catch (error) {
     console.log("mongodb have some error",error)
  }




}