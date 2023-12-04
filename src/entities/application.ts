import { Schema, model } from "mongoose";
const applicationEntity = new Schema({
    price: {
        type: Number,
        require: true
    },
    dateOfStudy: {
        type: Number,
        require: true
    },
    numberOfLesson: {
        type: Number,
        require: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: "posts",
        require: true
    },
    tuitorId: {
        type: Schema.Types.ObjectId,
        ref: "accounts",
        require: true
    }
})

module.exports = model("applications", applicationEntity)