const mongoose = require("mongoose");
require('dotenv').config();

async function connectToDB() {
    try {
        await mongoose.connect(process.env.ATLAS_URI, {});
        console.log("Connected to DB ");
    } catch (err) {
        console.error("Error connecting to DB:", err);
    }
}

// connectToDB();
const initDb = () => {
    connectToDB();
};

module.exports = {
    initDb,
};
