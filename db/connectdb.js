import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


export async function connectdb(){
  try {

    await mongoose.connect(process.env.MONGODBURL)
    console.log("mongodb connected")
    
  } catch (error) {
     console.log("mongodb have some error",error.message)
     process.exit(1)
  }




}