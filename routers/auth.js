import { Router } from "express";
import Users from "../models/usermodel.js"
import jwt from "jsonwebtoken"

const router= Router()

router.post("/register",async (req,res)=>{
    const {name,email,password}=req.body
    // const userdata=req.body
    const user={
        name,
        email,
        password,
        role:"user"
    }
    console.log(user)

    const payload={
        name,
        email,
        role:user.role
    }
    const token=jwt.sign(payload,"jkjjsjs")

    const users=await Users.create(user)

    res.status(201).json({
        message:"created successfully",
        data:users,
        token:token
        
    })  
})

router.post("/login",(req,res)=>{
  res.json({

    message :"login successfully"

  })

})





export default router