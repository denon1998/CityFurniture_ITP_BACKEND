const router = require("express").Router();
const FAQs = require('../models/FAQs');

  //save FAQs

  router.route("/add").post((req,res)=>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const Email = req.body.Email;
    const Phone = Number(req.body.Phone);
    const date = Date.parse(req.body.date);
    const orderNo = Number(req.body.orderNo);
    const category = req.body.category;
    const FAQsMsg = req.body.FAQsMsg;
    

    const newFAQs = new FAQs({
        fname,
        lname, 
        Email,
        Phone,
        date,
        orderNo,
        category,
        FAQsMsg
    })

    newFAQs.save()
    .then(()=>{res.json("FAQ Added") //FAQ added status
    }).catch(err => res.status(400).json('Error: ' + err)); //display err
    
})

// get all FAQs

router.route('/').get((_req, res) => {
    FAQs.find()
        .then(FAQs => res.json(FAQs))
        .catch(err => res.status(400).json('Error: ' + err));
});


//delete  FAQs

router.route('/:id').delete((req, res) => {
    FAQs.findByIdAndDelete(req.params.id)
        .then(() => res.json('FAQ deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//view one  FAQ

router.route('/:id').get((req, res) => {
    FAQs.findById(req.params.id)
        .then(FAQs => res.json(FAQs))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

