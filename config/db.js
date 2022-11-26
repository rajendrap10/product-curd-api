const mongoose = require("mongoose")

const connectDb = () => {
    mongoose.connect(process.env.MONGO_DB_URL).
    catch(error => handleError(error)).
    then(() => {
        console.log('db connected, successfully.');
    });
} 

module.exports = connectDb;