const mongoose = require("mongoose")

const  SocialDB = "mongodb://0.0.0.0:27017/SocialsDataBase2"
const SocialDB2 ="mongodb:127.0.0.0:27017/SocialsDataBase"
const SocialDB3 ="mongodb://localhost/SocialsDataBase"

const dataBase = async(req,res)=>{
    try {
        const db = await mongoose.connect(SocialDB)
        console.log("connected:",db.connection.host)
    } catch (error) {
        console.log("An error just occurred.")
    }
}

module.exports = dataBase()