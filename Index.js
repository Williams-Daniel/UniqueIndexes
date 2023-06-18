const express = require("express")
require("../Socials/Config/DataBase")
const userRouter = require("../Socials/Router/UserRouter")

const port = 4001
const app = express()
app.get("/",()=>{
    resizeBy.status.json({
        message:"server just connected!"
    })
})

app.use(express.json())
app.use("/api",userRouter)
app.listen(port,()=>{
    console.log("server is listening")
})