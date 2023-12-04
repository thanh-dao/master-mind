import { Schema, model } from "mongoose";
const postImageEntity = new Schema({
    imageLink: {
        type: String
    },
    status: {
        type: String,
        require: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: "posts",
        require: true
    }
}, {
    timestamps: true
})

module.exports = model("postImages", postImageEntity)