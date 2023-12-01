

const Todo=require("../models/ToDo")

//create rote handler

exports.deleteTodo=async(req,res)=>{
    try{
       const {id}=req.params;
       await Todo.findByIdAndDelete(id)

       res.status(200).json({
        sucess:true,
        message:'Deleted Sucessfully'
       })
         
    }
    catch(e){
            
            console.error(e);
            res.status(500)
            .json({
                sucess:false,
                data:'internal error',
                message:e.message
            })
    }
}