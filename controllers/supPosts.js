const express = require('express');
const Posts = require('../models/supPosts');

const router = express.Router();

// Save products

router.post('/suppost/save', (req, res) =>{

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


// Retrieve posts

router.get('/supposts', (req,res) =>{

    Posts.find().exec((err,posts) =>{

        if(err){
            return res.status(400).json({

                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });

});

//get specific post

router.get("/suppost/:id",(req,res) =>{

    let postId = req.params.id;

    Posts.findById(postId,(err,post)=>{

        if(err){
            return res.status(400).json({success:false, err});
        
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

// update posts

router.put('/suppost/update/:id', (req, res)=>{

    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, post) => {
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
})


// Delete post

router.delete('/suppost/delete/:id', (req,res) =>{

    Posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) =>{

        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully", err
        });
        return res.json({

            message:"Deleted successfull", deletedPost
        });
    });
});



module.exports = router; 