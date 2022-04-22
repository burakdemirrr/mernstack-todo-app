const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors');


const app=express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("tabi efendim");
})

app.listen(3001,()=>{
    console.log("listening.");
})