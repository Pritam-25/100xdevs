const mongoose = require("mongoose")
DATABASE_URL = "mongodb+srv://maityp394:48zPjrd92aTtgmu2@cluster0.rcc04.mongodb.net/todoApp"

async function DBconnect(){
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("Database connect succesfully");
    } catch (error) {
        console.log("issue in database conncetion");
    }
}

module.exports = DBconnect;