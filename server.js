import express from "express"
import  {connectdb} from "./db/connectdb.js"
import cors from "cors"


import authrouter from "./routers/auth.js"
const app= express()


app.use(express.json())
connectdb()
app.use(cors({
    origin:"*"
}))

app.use("/api",authrouter)








app.listen(3000,()=>{
    console.log("surver is running")
})