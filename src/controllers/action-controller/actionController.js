const User = require('../../models/userModel');
const Task = require('../../models/taskModel');

exports.getAllTask = async (req, res) => {
    try {
        const email = req.user.email;
        const findTask = await Task.find({email});
        if (!findTask) {
            return res.status(404).json({message: "No tasks found"})
        } else {
            return res.status(200).json(findTask)
        }
    } catch (err) {
        return res.status(500).json({message: err})
    }
}

exports.getTaskById = async (req,res) => {
    try {
        const _id = req.params._id;
        const email = req.user.email;
        const findTask = await Task.findOne({_id, email});
        if (!findTask) {
            return res.status(400).json({message: "No task found for this email "})
        } else {
            return res.status(200).json(findTask)
        }
    } catch (err) {
        return res.status(500).json({message:err})
    }
}

exports.createTask = async (req, res) => {
    try {
        const {title, description} = req.body;
        const email = req.user.email;
        if (!title || !description) {
            return res.status(400).json({message: 'Title or Description is required'})
        }
        const newTask = new Task({
            title,
            description,
            email
        });
        await newTask.save();
        if (newTask) {
            return res.status(200).json({message: 'Task added', newTask})
        }
    } catch (err) {
        return res.status(500).json({message: err})
    }
}

exports.updateTask = async (req, res) => {
    try {
        const _id = req.params._id;
        const email = req.user.email;
        const updatedTask = req.body;
        const findTask = await Task.findOne({_id, email});
        if (!findTask) {
            return res.status(400).json({message: "No task found for this email "})
        }
        const options = {new:true};
        const result = await Task.findByIdAndUpdate(_id, updatedTask, options);
        return res.status(200).json({message: `Task updated for ${email}`, result});
    } catch (err) {
        return res.status(500).json({message: err})
    }
}

exports.deleteTask = async (req,res) => {
    try {
        const _id = req.params._id;
        const email = req.user.email;
        const findTask = await Task.findOne({_id, email});
        if (!findTask) {
            return res.status(401).json({message: "Unauthorized to delete this"});
        }
        const deleteTask = await Task.findByIdAndDelete(_id);
        return res
            .status(200)
            .json({message: `Task deleted for ${email}`, deleteTask});
    } catch (err) {
        return res.status(500).json({message:err})
    }
}
