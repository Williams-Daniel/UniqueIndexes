const express = require("express")
const userModel = require("../Model/UserModel")

const getAllUser = async(req,res)=>{
    try {
        const allUsers = await userModel.find().sort({createdAt:-1})
        res.status(200).json({
            message:"getting all user",
            data:allUsers
        })
    } catch (error) {
        res.status(404).json({
            message:"cannot get all users"
        })
    }
}


const  newUser = async(req,res)=>{
    try {
        const {userName,userEmail,userPassword}= req.body
        const createUser = await userModel.create({
            userName,
            userEmail,
            userPassword
        })
        res.status(201).json({
            message:"Registering a new user",
            data: createUser
        })
    } catch (error) {
        res.status(404).json({
            message:"cannot create user"
        })
    }
}

module.exports = {getAllUser,newUser}