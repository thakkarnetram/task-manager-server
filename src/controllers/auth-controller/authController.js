const User = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// for usage outside this file
exports.signToken = (email) => {
    return jwt.sign(
        {
            email,
        },
        process.env.SECRET_KEY
    );
};

const signToken = (email) => {
    return jwt.sign(
        {
            email,
        },
        process.env.SECRET_KEY
    );
};

exports.signup = async (req, res) => {
    try {
        // inputs
        const {name, email, password} = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // validations
        if (!name || !email || !password) {
            return res.status(400).json({message: "All fields are required"})
        } else if (!emailRegex.test(email)) {
            return res.status(400).json({message: "Invalid email format"})
        }

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: "User already exists, Please Login"})
        }

        // hashing
        const hash = await bcrypt.hash(password, 10);

        // new user object create and save
        const newUser = new User({
            name,
            email,
            password: hash
        })

        await newUser.save();

        return res.status(200).json({
            message: "User account created ",
            user: newUser
        })

    } catch (err) {
        return res.status(500).json({message: `${err}`})
    }
}

exports.login = async (req, res) => {
    try {
        // inputs
        const {email, password} = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // validations
        if (!email && !password) {
            return res.status(400).json({message: "Email and password is required"})
        } else if (!emailRegex.test(email)) {
            return res.status({message: "Invalid email format"})
        }
        const findUser = await User.findOne({email});
        if (!findUser) {
            return res.status(404).json({message: "User not found"})
        }

        // comparing hashed password with input
        const matchPassword = await bcrypt.compare(password, findUser.password);

        // sending token and user object
        if (matchPassword) {
            const token = signToken(findUser.email);
            return res.status(200).json({
                message: "Login success",
                token,
                user: findUser
            })
        } else {
            return res.status(403).json({message: "Provided password does not match"})
        }

    } catch (err) {
        return res.status(500).json({message: `${err}`})
    }
}
