const { response } = require("express");
const Todo=require("../models/ToDo")

//create rote handler

exports.createTodo=async(req,res)=>{
    try{
        //extract title ans desc from req ki body
         const {title,description}=req.body;
         //create new TOdo object and insert in db
         const response =await Todo.create({title,description})
         //send a json res withna sucess flag
         res.status(200).json({
            sucess:true,
            data:response,
            message:'entry success'
         }
            
         )
    }
    catch(e){
            console.log(e);
            console.error(e);
            res.status(500)
            .json({
                sucess:false,
                data:'internal error',
                message:e.message
            })
    }
}