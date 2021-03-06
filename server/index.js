const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors');


const TaskSchema=require('./models/Tasks');

const app=express();

mongoose.connect("mongodb+srv://user31:Burakdemir99@tasks.g0tpu.mongodb.net/Tasks?retryWrites=true&w=majority",{
    useNewUrlParser:true,
})

app.use(express.json());
app.use(cors());


app.post("/insert",async (req,res)=>{
    const gorev=req.body.task;
    const days=req.body.days;
    const newTask=TaskSchema({task:gorev,days:days});
    try{
        await newTask.save();
        res.send("yess")
    }
    catch(error){
        res.send("error");
    }
})

app.get("/read",async (req,res)=>{
    TaskSchema.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result);
    })
})

app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;

    await TaskSchema.findByIdAndRemove(id).exec();
    res.send("delete");

})


app.get("/",(req,res)=>{
    res.send("tabi efendim");
})

app.listen(3001,()=>{
    console.log("listening.");
})
