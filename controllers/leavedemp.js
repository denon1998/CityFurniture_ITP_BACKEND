

const express = require('express');
const router = express.Router();
const LeavedEmp = require('../models/leavedemp');
router.get('/',async(req,res)=>{
    try{
        const leavedemps = await LeavedEmp.find();
        res.json(leavedemps);
    }catch(err){
        console.log("Error "+err);
    }
});

router.post('/search',async(req,res)=>{
    try{
        const l = await LeavedEmp.find({empId:{$regex:req.body.id,$options:'i'}});
        res.json(l);
    }catch(err){
        console.log("Error "+err);
    }
});

router.post('/',async(req,res)=>{
    const leavedemp = new LeavedEmp({
        empId: req.body.empId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        Address: req.body.Address,
        phone: req.body.phone, 
    });
    try{
        const savedLeavedemp = await leavedemp.save();
        res.json(savedLeavedemp);
    }catch(err){
        console.log("Error "+err);
    }
});

module.exports = router;