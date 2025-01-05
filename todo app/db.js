const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const User = new Schema({
    username: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true }
})

const Todo = new Schema({
    title: { type: String, require: true },
    description: String,
    userId: ObjectId,
    isDone: Boolean
})

const UserModel = mongoose.model("user", User)
const TodoModel = mongoose.model("todo", Todo)

module.exports = { UserModel, TodoModel }