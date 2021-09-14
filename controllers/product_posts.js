const express = require('express');
const Posts = require('../models/product_posts');

const router = express.Router();

// Save products

router.post('/postPro/save', (req, res) =>{

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

router.get('/postsPro', (req,res) =>{

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

router.get("/postPro/:id",(req,res) =>{

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

router.put('/postPro/update/:id', (req, res)=>{

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

router.delete('/postPro/delete/:id', (req,res) =>{

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