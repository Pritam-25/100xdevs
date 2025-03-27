const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const User = new Schema({
    username: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true }
})

//* Todo Schema
const Todo = new Schema({
    title: { type: String, required: true },
    description: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // Reference the 'User' model
    },
    isDone: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const UserModel = mongoose.model("user", User)
const TodoModel = mongoose.model("todo", Todo)

module.exports = { UserModel, TodoModel }