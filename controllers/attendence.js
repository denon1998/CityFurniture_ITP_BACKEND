const express = require('express');
const router = express.Router();
const Attendence = require('../models/attendence');

router.get('/', async (req, res) => {
    try {
        const attendence = await Attendence.find();
        res.json(attendence);
    } catch (err) {
        console.log("Error " + err);
    }
});
router.get('/:date', async (req, res) => {
    try {
        const attendence = await Attendence.find({ date: req.params.date });
        res.json(attendence);
    } catch (err) {
        console.log("Error " + err);
    }
});


router.get('/:date/:employeeId', async (req, res) => {
    try {
        const attendence = await Attendence.find({ date: req.params.date, employeeId: req.params.employeeId });
        res.json(attendence);
    } catch (err) {
        console.log("Error " + err);
    }
});

router.post('/search',async(req,res)=>{
    try{
        const a = await Attendence.find({employeeId:{$regex:req.body.id,$options:'i'},date: req.body.date});
        res.json(a);
    }catch(err){
        console.log("Error "+err);
    }
});

// Absent present
router.patch('/:id', async (req, res) => {
    
    try {
        const attendence = await Attendence.findById(req.params.id);
        attendence.attendence = req.body.attendence;
        const a1 = await attendence.save();
        res.json(a1);
    } catch (err) {
        console.log("Error " + err);
    }
});

router.post('/', async (req, res) => {
    const attendence = new Attendence({
        date: req.body.date,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        attendence: req.body.attendence,
        employeeId: req.body.employeeId
    });
    try {
        const savedattendence = await attendence.save();
        res.json(savedattendence);
    } catch (err) {


        console.log("Error " + err);
    }
});

module.exports = router;