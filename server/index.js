const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors');


const app=express();

mongoose.connect("mongodb+srv://user31:Burakdemir99@tasks.g0tpu.mongodb.net/Tasks?retryWrites=true&w=majority",{
    useNewUrlParser:true,
})

app.use(express.json());
app.use(cors());




app.get("/",(req,res)=>{
    res.send("tabi efendim");
})

app.listen(3001,()=>{
    console.log("listening.");
})
