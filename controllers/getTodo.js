const Todo=require("../models/ToDo")

exports.getTodo=async(req,res)=>{
    try{
        // fetch all todo item
        const todos=await Todo.find({});

        //response
        res.status(200)
        .json({
            sucess:true,
            data:todos,
            message:"entire data is fetched"
        })
        
    }
    catch(e){
        console.error(e)
        res.status(500).json({
            sucess:false,
            error:"error in getting",
            message:'server error'

        })
        
    }
}

exports.getTodoById=async(req,res)=>{
    try{
        // fetch  todo item by id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});

        if(!todo){
            return res.status(404).json({
                sucess:false,
                message:'No data for given id'
            })
        }
        res.status(200)
        .json({
            sucess:true,
            data:todo,
            message:`todo ${id} fetched`
        })
        
    }
    catch(e){
        console.error(e)
        res.status(500).json({
            sucess:false,
            error:"error in getting",
            message:'server error'

        })
        
    }
}
