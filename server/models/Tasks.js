const mongoose=require('mongoose');



const TaskSchema=mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    days:{
        type:Number,
        required:true,
    }
})

const Tasks=mongoose.model("Tasks",TaskSchema);

module.exports=Tasks;