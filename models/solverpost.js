const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const solverpostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    dep_session:{
        type: String,
        required: true
    },
    likes: [{
        type: ObjectId,
        ref: 'User'
    }],
    comments: [{
        text: String,
        postedBy: { type: ObjectId, ref: 'User' }
    }],
    postedBy: {
        type: ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

mongoose.model('Solverpost', solverpostSchema);