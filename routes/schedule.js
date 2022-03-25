const router = require('express').Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Schedule = mongoose.model('Schedule');


router.get('/schedule/:dep_session', requireLogin, (req, res) => {
    Schedule.find({dep_session:`/${req.params.dep_session}`})
        .then(posts => {
            res.json({ posts: posts });
        })
        .catch(e => {
            console.error(e);
        });
});



router.post('/schedule/add', requireLogin, (req, res) => {
    const { dates, times, course,teacher, dep_session} = req.body;
if (!dates || !times || !dep_session || !course || !teacher) {
        return res.json({ error: 'Please add the fields!' });
    }
    const post = new Schedule({ dates, times,dep_session, course, teacher });
    post.save()
        .then(post => {
            res.json({ post: post, message: "Quesion is Uploaded Successfully!" });
        })
        .catch(e => {
            console.log(e);
        });
});



router.put('/schedule/:id', requireLogin, (req, res) => {
    let {dates,times,course,teacher} = req.body;
    const doc = Schedule.findOne({ _id:req.params.id })

// Sets `name` and unsets all other properties
     doc.overwrite({dates,times,course,teacher});
     doc.save()
    .then(post => {
        res.json({ post: post, message: "class is edited Successfully!" });
    })
    .catch (error=>{
        res.status(409).json({ message: error.message});     
    });
});

router.delete('/schedule/:id', requireLogin,(req, res) => {
    Schedule.findOne({_id: req.params.id}, function (error, classs){
        classs.remove()
        .then(post => {
            res.json({ post: post, message: "Class is deleted Successfully!" });
        })
        .catch(e => {
            console.log(e);
        });
    });
});

router.get('/schedule/:id', async(req, res) => {
    try{
        const user = await Schedule.findById(request.params.id);
        res.status(200).json(user);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
});



module.exports = router;

