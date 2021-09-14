const router = require("express").Router();
const contact = require('../models/contact');

  //add contact

  router.route("/add").post((req,res)=>{
    const Username = req.body.Username;
    const Phone = Number(req.body.Phone);
    const Email = req.body.Email;
    
  
    const newcontact = new contact({
        Username, 
        Phone,
        Email
    })

    newcontact.save()
       .then(()=> {res.json("contact Added")}) //contact added status
       .catch((err)=> {console.log(err)   //display err
    })
})

// get all contact

router.route('/').get((_req, res) => {
    contact.find()
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update contact

router.route('/update/:id').put((req, res) => {
    contact.findById(req.params.id)
        .then(contact => {
            contact.Username = req.body.Username;
            contact.Phone = Number(req.body.Phone);
            contact.Email = req.body.Email;

            contact.save()
                .then(() => res.json('contact updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


//delete contact

router.route('/:id').delete((req, res) => {
    contact.findByIdAndDelete(req.params.id)
        .then(() => res.json('contact deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//view one contact

router.route('/:id').get((req, res) => {
    contact.findById(req.params.id)
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

