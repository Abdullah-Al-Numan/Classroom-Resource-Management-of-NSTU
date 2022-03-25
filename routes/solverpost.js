const router = require('express').Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Solverpost = mongoose.model('Solverpost');
const User = mongoose.model('User');


router.get('/solverallpost/:dep_session', requireLogin, (req, res) => {
    Solverpost.find({dep_session:`/${req.params.dep_session}`})
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





router.post('/solvercreatepost', requireLogin, (req, res) => {
    const { title, body, dep_session} = req.body;
    if (!title || !body || !dep_session) {
        return res.json({ error: 'Please add the fields!' });
    }
    const post = new Solverpost({ title, body,dep_session, postedBy: req.user });
    post.save()
        .then(post => {
            res.json({ post: post, message: "Quesion is Uploaded Successfully!" });
        })
        .catch(e => {
            console.log(e);
        });
});


router.get('/mypost', requireLogin, (req, res) => {
    Solverpost.find({ postedBy: req.user._id })
        .populate('postedBy', '_id name profilePhoto')
        .then(myposts => {
            res.json({ myposts: myposts });
        })
        .catch(e => {
            console.error(e);
        });
});


router.put('/solverlike', requireLogin, (req, res) => {
    Solverpost.findByIdAndUpdate(req.body.postId, {
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


router.put('/solverunlike', requireLogin, (req, res) => {
    Solverpost.findByIdAndUpdate(req.body.postId, {
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


router.put('/solvercomment', requireLogin, (req, res) => {
    const comment = {
        text: req.body.text,
        postedBy: req.user._id
    };
    Solverpost.findByIdAndUpdate(req.body.postId, {
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


router.delete('/solverdeletepost/:postId', requireLogin, (req, res) => {
    Solverpost.findOne({_id: req.params.postId})
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


router.delete('/solverdeletecomment/:postId/:commentId', requireLogin, (req, res) => {
    Solverpost.findOne({_id: req.params.postId})
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
            Solverpost.findOne({_id: result.id})
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


router.post('/solverlikedusers', requireLogin, (req, res) => {
    Solverpost.findById( req.body.postId )
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


router.get('/solverpost/:postid', requireLogin, (req, res) => {
    Solverpost.findOne({ _id: req.params.postid })
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