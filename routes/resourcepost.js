const router = require('express').Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Resourcepost = mongoose.model('Resourcepost');
const Post = mongoose.model('Post');
const User = mongoose.model('User');


router.get('/allresourcepost/:dep_session', requireLogin, (req, res) => {
    Resourcepost.find({dep_session:`/${req.params.dep_session}`})
        .populate('postedBy', '_id name profilePhoto')
        .populate('comments.postedBy', '_id name')
        .sort('-createdAt')
        .then(posts => {
            res.json({ posts: posts });
        })
        .catch(e => {
            console.error(e);
        });
});





router.post("/resourcecreatepost", requireLogin, (req, res) => {
    const {subject, title, body, picUrl, dep_session } = req.body;
    if (!title || !body || !picUrl || !subject || !dep_session) {
        return res.json({ error: 'Please add all the fields!' });
    }
    const resourcepost = new Resourcepost({subject, title, body, photo: picUrl,dep_session, postedBy: req.user });
    resourcepost.save()
        .then(post => {
            res.json({ post: post, message: "Image Uploaded Successfully!" });
        })
        .catch(e => {
            console.log(e);
        });
});


router.get('/mypost', requireLogin, (req, res) => {
    Resourcepost.find({ postedBy: req.user._id })
        .populate('postedBy', '_id name profilePhoto')
        .then(myposts => {
            res.json({ myposts: myposts });
        })
        .catch(e => {
            console.error(e);
        });
});


router.put('/resourcelike', requireLogin, (req, res) => {
    Resourcepost.findByIdAndUpdate(req.body.postId, {
        $push: {likes: req.user._id}
    }, {
        new: true
    })
    .populate('postedBy', '_id name profilePhoto')
    .populate('comments.postedBy', '_id name')
    .exec((err, result) => {
        if (err) {
            return res.json({error: err});
        }
        res.json(result);
    })
});


router.put('/resourceunlike', requireLogin, (req, res) => {
    Resourcepost.findByIdAndUpdate(req.body.postId, {
        $pull: {likes: req.user._id}
    }, {
        new: true
    })
    .populate('postedBy', '_id name profilePhoto')
    .populate('comments.postedBy', '_id name')
    .exec((err, result) => {
        if (err) {
            return res.json({error: err});
        }
        res.json(result);
    })
});


router.put('/resourcecomment', requireLogin, (req, res) => {
    const comment = {
        text: req.body.text,
        postedBy: req.user._id
    };
    Resourcepost.findByIdAndUpdate(req.body.postId, {
        $push: {comments: comment}
    }, {
        new: true
    })
    .populate('comments.postedBy', '_id name')
    .populate('postedBy', '_id name profilePhoto')
    .exec((err, result) => {
        if (err) {
            return res.json({error: err});
        }
        res.json(result);
    })
});


router.delete('/resourcedeletepost/:postId', requireLogin, (req, res) => {
    Resourcepost.findOne({_id: req.params.postId})
    .populate("postedBy", "_id")
    .exec((err, post) => {
        if (err || !post) {
            return res.json({ error: err });
        }
        if (post.postedBy._id.toString() === req.user._id.toString()) {
            post.remove()
            .then(result => {
                res.json({ result, message: 'Successfully deleted!' })
            })
            .catch(e => {
                console.log(e);
            });
        }
    })
});


router.delete('/resourcedeletecomment/:postId/:commentId', requireLogin, (req, res) => {
    Resourcepost.findOne({_id: req.params.postId})
    .populate("postedBy", "_id")
    .populate('comments.postedBy', '_id name')
    .exec((err, post) => {
        if (err || !post) {
            return res.json({ error: err });
        }
        post.comments = post.comments.filter(item => {
            if (!(item.postedBy._id.toString() === req.user._id.toString() && item._id.toString() === req.params.commentId.toString())) {
                return item
            }
        })
        post.save()
        .then(result => {
            Resourcepost.findOne({_id: result.id})
            .populate('postedBy', '_id name profilePhoto')
            .populate('comments.postedBy', '_id name')
            .exec((e, post) => {
                if (err || !post) {
                    return res.json({ error: err });
                }
                res.json({ result: post, message: 'Successfully deleted comment!' });
            })
        })
        .catch(e => {
            console.log(e);
        })
        
    })
});


router.post('/resourcelikedusers', requireLogin, (req, res) => {
    Resourcepost.findById( req.body.postId )
        .populate('postedBy', '_id name email')
        .then(post => {
            User.find({ _id: {$in: post.likes} })
                .select('_id name email')
                .then(users => {
                    res.json({ users })
                })
        })
        .catch(e => {
            console.error(e);
        });
});


router.get('/resourcepost/:postid', requireLogin, (req, res) => {
    Resourcepost.findOne({ _id: req.params.postid })
    .populate('postedBy', '_id name profilePhoto')
    .populate('comments.postedBy', '_id name')
    .then(post => {
        res.json({ post: post });
    })
    .catch(e => {
        console.error(e);
    });
});


module.exports = router;