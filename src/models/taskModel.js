const mongoose = require('mongoose');
const shortId = require('shortid');

const TaskSchema = new mongoose.Schema({
    _id:{
      type:String,
      default:shortId.generate,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    email:{
        type:String
    }
})

const Task = mongoose.model('tasks', TaskSchema);
module.exports = Task;
