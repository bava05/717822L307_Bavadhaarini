const express = require("express");
const api_call=require("../config/config.env");

exports.fibo = async(req,res)=>{
    const number = req.api_call.getValue("Enter the value");
    if(number === 1){
        res.status(200).json({
            message:"The given number is the fibonacci series number",
        })
    }
    for(let i=1;i<number;i++){
        if((i-1)+i==(i+1)){
            res.status(200).json({
                message:"the given number is in the fibonacci series",
            })
        }
        else{
            res.status(400).json({
                message:"The given number is not in the fibonacci series",
            })
        }
    }
}