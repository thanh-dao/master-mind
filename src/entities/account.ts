import { Schema, model } from "mongoose";

const accountEntity = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String
    },
    avatar: {
        type: String
    },
    status: {
        type: Number,
        require: true
    },
    role: {
        type: Number,
        require: true
    }

})

module.exports = model("accounts", accountEntity)