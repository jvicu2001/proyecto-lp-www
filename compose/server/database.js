const mongoose = require("mongoose");


const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/case17?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1');

        console.log("MongoDB Connected!");   
    } catch (error) {
        console.log("An error has ocurred connecting to MongoDB :c.");
        console.log(error)
    }
}


module.exports = connect;