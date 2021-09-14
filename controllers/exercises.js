const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const username = req.body.username;
    const Address = req.body.Address;
    const Phone = Number(req.body.Phone);
    const birthday = Date.parse(req.body.birthday);
    const Gender = req.body.Gender;
    const Email = req.body.Email;
    const password = req.body.password;


    const newExercise = new Exercise({
        username,
        Address,
        Phone,
        birthday,
        Gender,
        Email,
        password,
    });



    newExercise.save()
        .then(() => res.json('Customer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Customer deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.Address = req.body.Address;
            exercise.Phone = Number(req.body.Phone);
            exercise.birthday = Date.parse(req.body.birthday);
            exercise.Gender = req.body.Gender;
            exercise.Email = req.body.Email;
            exercise.password = req.body.password;


            exercise.save()
                .then(() => res.json('Customer updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;