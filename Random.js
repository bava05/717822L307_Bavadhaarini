const express = require("express");
const api_call = require("../config/config.env");

exports.random = async(req,res)=>{
    const randomNumber=Math.random();
    if(!randomNumber){
        res.status(400).json({
            message:"The random number is not generated",
        })
    }
    else{
        res.status(200).json({
            message:"The random number is generated",
        })
    }
}