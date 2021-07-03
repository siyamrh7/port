const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const router=require('./router')

mongoose.connect('mongodb+srv://siyam:siyam123789654@cluster0.7khvc.mongodb.net/portfolio?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true }).then(res=>console.log("Database Ok")).catch(err=>console.log(err))
const app=express()
app.use(cors())
app.use(express.json())
app.use('/',router)
app.get('/',(req,res)=>{
    res.send("server okay")
})
app.listen(2000,()=>{
    console.log("server runnuing at 20000")
})