
const Model=require('./model')

const msgCtrl=async(req,res)=>{
    try {
        const {message,email}=req.body
        await Model.create({
            message,email
        })
        res.send("Thanks For Your Response,We Will Contact Soon")
    } catch (error) {
        res.send(error.message)
    }
}
module.exports=msgCtrl