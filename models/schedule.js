const mongoose = require('mongoose');
const scheduleSchema = new mongoose.Schema({
    dates: {
        type: String,
        required: true
    },
    times: {
        type: String,
        required: true
    },
    dep_session:{
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


mongoose.model('Schedule', scheduleSchema);



