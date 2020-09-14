const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/shorturl?retryWrites=true&w=majority', {
            useNewURLParser: true
        });
        console.log("Connected to DB");
    }catch(err){
        console.error(err.message);
    }
}

module.exports = connectDB;