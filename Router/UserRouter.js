const express = require("express")
const {getAllUser,newUser} = require("../Controller/UserController")


const router = express.Router()
router.route("/getAll").get(getAllUser)
router.route("/register").post(newUser)

module.exports = router