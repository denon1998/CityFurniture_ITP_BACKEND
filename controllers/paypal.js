const express = require('express');
const Posts = require('../models/paypal');
const router = express.Router();





router.post('/postPay/save',(req,res) =>{

    let newPost = new Posts(req.body);

    newPost.save((err) =>{

        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });


});


///get posts
router.get('/paypalposts',(req,res)  =>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({

                error:err
            });
        }

        return res.status(200).json({

            success: true,
            existingPosts : posts
        });
    });
});



//get a specific post
router.get("/paypalpost/:id",(req,res) => {

    let postId = req.params.id;
    Posts.findById(postId,(err,post) => {
        if(err){
            return res.status(400).json({success:false, err});

        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update post mulu body ekama thama update kranne me code eken

router.put('/paypalpost/update/:id',(req,res) => {

    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) => {

            if(err){
                return res.status(400).json({
                    error:err
                });

            }

            return res.status(200).json({
                success: "Update Succesfully"
            });
        }
    );
});

//delete post 
router.delete('/paypalpost/delete/:id' ,(req,res) =>{

    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsucceful",err
        });

        return res.json({
            message: "Delete succefull",deletedPost
        });
    });
});


module.exports = router;