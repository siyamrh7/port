const router=require('express').Router()

const msgCtrl=require('./ctrl')

router.post('/',msgCtrl)

module.exports=router