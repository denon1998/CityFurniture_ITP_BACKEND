const express = require('express');
const router = express.Router();
const Salary = require('../models/salary');
router.get('/',async(req,res)=>{
    try{
        const salary = await Salary.find();
        res.json(salary);
    }catch(err){
        console.log("Error "+err);
    }
});

router.post('/search',async(req,res)=>{
    try{
        const s = await Salary.find({employeeId:{$regex:req.body.id,$options:'i'}});
        res.json(s);
    }catch(err){
        console.log("Error "+err);
    }
});

router.post('/',async(req,res) => {
    const salary = new Salary({
        employeeId: req.body.employeeId,
        name: req.body.name,
        position: req.body.position,
        basicSalary: req.body.basicSalary,
        month: req.body.month,
        advancePayment: req.body.advancePayment,
        overtimePayment: req.body.overtimePayment,
        totalPayment: req.body.totalPayment,
        perDaySalary: req.body.perDaySalary,
        totalDays: req.body.totalDays,
    });
    try{
        const saveSalary = await salary.save();
        res.json(saveSalary);
    }catch(err){


        console.log("Error "+err);
    }
});

router.put('/',async(req,res) => {
    try{
        const s = await Salary.findById(req.body.id);
        s.employeeId = req.body.employeeId;
        s.name = req.body.name;
        s.position = req.body.position;
        s.basicSalary = req.body.basicSalary;
        s.month = req.body.month;
        s.advancePayment = req.body.advancePayment;
        s.overtimePayment = req.body.overtimePayment;
        s.totalPayment = req.body.totalPayment;
        s.perDaySalary = req.body.perDaySalary;
        s.totalDays = req.body.totalDays;
        const updateSalary = await s.save();
        res.json(updateSalary);
    }
    catch(err){
        console.log("Error "+err);
    }  
})

router.get('/:id',async(req,res)=>{
    try{
        const salary = await Salary.findById(req.params.id);
        res.json(salary);
    }catch(err){
        console.log("Error "+err);
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const remSalary = await Salary.remove({_id:req.params.id});
        res.json(remSalary);
    }catch(err){
        console.log("Error "+err);
    }
}
);


module.exports = router;
