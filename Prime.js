const express=require("express");
const api_call=require("../config/config.env");
exports.prime = async(req,res)=>{
    const num = req.api_call.getValue("Enter the number");
    let isPrime=true;
    if(num === 1){
        return res.status(200).json({
            message:"1 is not a prime or a composite number",
        })
    }
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        res.status(200).json({
            message:"The given number is a prime number",
        })
    } else {
        res.status(400).json({
        message:"The given number is not a prime number",
    })
    }
}