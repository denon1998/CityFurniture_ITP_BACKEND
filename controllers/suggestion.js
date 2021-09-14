const router = require("express").Router();
const suggestion = require('../models/suggestion');

  //save suggestion

  router.route("/add").post((req,res)=>{
    const Username = req.body.Username;
    const Phone = Number(req.body.Phone);
    const Email = req.body.Email;
    const date = Date.parse(req.body.date);
    const suggestionMsg = req.body.suggestionMsg;

    const newSuggestion = new suggestion({
        Username, 
        Phone,
        Email,
        date,
        suggestionMsg
    })

    newSuggestion.save()  
    .then(()=>{res.json("suggestion Added") //Suggestion added status
    }).catch(err => res.status(400).json('Error: ' + err));  //display err
});

// get all suggestion

router.route('/').get((_req, res) => {
    suggestion.find()
        .then(suggestion => res.json(suggestion))
        .catch(err => res.status(400).json('Error: ' + err));
});


//delete suggestion

router.route('/:id').delete((req, res) => {
    suggestion.findByIdAndDelete(req.params.id)
        .then(() => res.json('suggestion deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//view one suggestion

router.route('/:id').get((req, res) => {
    suggestion.findById(req.params.id)
        .then(suggestion => res.json(suggestion))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
