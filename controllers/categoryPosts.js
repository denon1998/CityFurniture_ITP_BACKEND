const express = require('express');
const Posts = require('../models/categoryPosts');

const router = express.Router();

// Save category details

router.post('/catpost/save', (req, res) =>{

    let newPost = new Posts(req.body);

    newPost.save((err) =>{

            if(err){
                return res.status(400).json({

                    error:err
                });
            }

            return res.status(200).json({

                success:"Categories saved successfully"
            });
    });
});


// Retrieve category details

router.get('/catposts', (req,res) =>{

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



//get specific category details

router.get("/catpost/:id",(req,res) =>{

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



// update category details

router.put('/catpost/update/:id', (req, res)=>{

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


// Delete category details

router.delete('/catpost/delete/:id', (req,res) =>{

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