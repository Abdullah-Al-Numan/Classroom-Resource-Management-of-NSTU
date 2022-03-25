const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const resourcepostSchema = new mongoose.Schema({
    subject:{type:String,requered:true},
    title: {type: String,required: true},
    body: {type: String,required: true},
    photo: {type: String,required: true},
    dep_session:{type: String,required: true},
    likes: [{type: ObjectId,ref: 'User'}],
    comments: [{text: String,postedBy: { type: ObjectId, ref: 'User' }}],
    postedBy: {type: ObjectId,ref: 'User'}
}, {
    timestamps: true
});

mongoose.model('Resourcepost', resourcepostSchema);