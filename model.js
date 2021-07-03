const mongoose=require('mongoose')

const msgSchema=new mongoose.Schema({
    message:{
        type:String
    },
    email:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
const Model=mongoose.model('Model',msgSchema)
module.exports=Model