const express=require("express");
const api_call=require("../config/config.env");

exports.even = async(req,res)=>{
    const num = req.api_call.getValue("Enter the even number");
    if(num%2==0){
        res.status(200).json({
            message:"The number is the even number",
        })
    }
    else{
        res.status(400).json({
            message:"The number is not an even number",
        })
    }
}