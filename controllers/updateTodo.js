
const Todo=require("../models/ToDo")

//create rote handler

exports.updateTodo=async(req,res)=>{
    try{
       const {id}=req.params;
       const {title,description}=req.body;
       
       const todo= await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updatedAt:Date.now()},
       )

       res.status(200).json({
        sucess:true,
        data:todo,
        message:'Updated Sucessfully'
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