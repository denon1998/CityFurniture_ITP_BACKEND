const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,  __dirname + '/../uploads/');

    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);

    } else {
        cb(null, false);
    }
};

// Max file size is 10MB
const upload = multer({ 
    storage: storage ,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
});
router.get('/',async(req,res)=>{
    try{
        const employees = await Employee.find();
        res.json(employees);
    }catch(err){
        console.log("Error "+err);
    }
});
router.get('/lastid',async(req,res)=>{
    try{
        const employee = await Employee.find().sort({employeeId:-1}).limit(1);
        if(employee.length==0){
            res.json({employeeId:'001'});
        }else{
            var id = parseInt(employee[0].employeeId)+1;
            if(id < 10){
                id = '00'+id;
            }else if(id < 100){
                id = '0'+id;
            }else{
                id = id;
            }
            res.json({employeeId:id});
        }
    } catch(err){
        console.log("Error "+err);
    }
 });

 router.post('/search',async(req,res)=>{
    try{
        const employees = await Employee.find({employeeId:{$regex:req.body.id,$options:'i'}});
        res.json(employees);
    }catch(err){
        console.log("Error "+err);
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const employees = await Employee.find({employeeId:req.params.id});
        res.json(employees);
    }catch(err){
        console.log("Error "+err);
    }
});


router.post('/',async(req,res) => {
    const employee = new Employee({
        employeeId: req.body.employeeId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        age: req.body.age,
        email: req.body.email,
        gender: req.body.gender,
        empPhone: req.body.empPhone,
        dateOfEntery: req.body.dateOfEntery,
        education: req.body.education,
        position: req.body.position,
        basicSalary: req.body.basicSalary,
        empImage: req.body.empImage
    });
    try{
        const savedEmployee = await employee.save();
        res.json(savedEmployee);
    }catch(err){


        console.log("Error "+err);
    }
});


router.put('/',async(req,res)=>{
    try{
        const employee = await Employee.findById(req.body.id);
        employee.employeeId = req.body.employeeId;
        employee.firstName = req.body.firstName;
        employee.lastName = req.body.lastName;
        employee.address = req.body.address;
        employee.age = req.body.age;
        employee.email = req.body.email;
        employee.gender = req.body.gender;
        employee.empPhone = req.body.empPhone;
        employee.dateOfEntery = req.body.dateOfEntery;
        employee.education = req.body.education;
        employee.position = req.body.position;
        employee.basicSalary = req.body.basicSalary;
        employee.empImage = req.body.empImage;
        const e1 = await employee.save();
        res.json(e1);
    }
    catch(err){
        console.log("Error "+err);
    }   

});

router.delete('/:id',async(req,res)=>{
    try{

        const emp = await Employee.findById(req.params.id);
        const removedEmployee = await Employee.remove({_id:req.params.id});
        res.json(emp);
    }catch(err){
        console.log("Error "+err);
    }
}
);


router.post('/uploadimage',upload.single('propic'),async(req,res, next)=>{
    console.log(req.file);
    res.json({url: 'uploads/'+ req.file.filename});
});



module.exports = router;
