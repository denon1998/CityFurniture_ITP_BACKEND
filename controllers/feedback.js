const router = require("express").Router();
const Feedback = require('../models/feedback');

  //add feedback

  router.route("/add").post((req,res)=>{
    const Username = req.body.Username;
    const Phone = Number(req.body.Phone);
    const Email = req.body.Email;
    const date = Date.parse(req.body.date);
    const feedbackMsg = req.body.feedbackMsg;

    const newFeedback = new Feedback({
        Username, 
        Phone,
        Email,
        date,
        feedbackMsg
    })

    newFeedback.save()
    .then(()=>{res.json("feedback Added") //feedback added status
    }).catch(err => res.status(400).json('Error: ' + err));  //display err
});

// get all feedback
router.route('/').get((_req, res) => {
    Feedback.find()
        .then(feedback => res.json(feedback))
        .catch(err => res.status(400).json('Error: ' + err));
});


//update feedback

router.route('/update/:id').put((req, res) => {
    Feedback.findById(req.params.id)
        .then(feedback => {
            feedback.Username = req.body.Username;
            feedback.Phone = Number(req.body.Phone);
            feedback.Email = req.body.Email;
            feedback.date = Date.parse(req.body.date);
            feedback.feedbackMsg = req.body.feedbackMsg;

        
            exercise.save()
                .then(() => res.json('feedback updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete feedback

router.route('/:id').delete((req, res) => {
    Feedback.findByIdAndDelete(req.params.id)
        .then(() => res.json('Feedback deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//view one feedback

router.route('/:id').get((req, res) => {
    Feedback.findById(req.params.id)
        .then(feedback => res.json(feedback))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

