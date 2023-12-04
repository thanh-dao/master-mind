import { Schema, model } from "mongoose";
const commentEntity = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: "posts",
        require: true
    },
    status: {
        type: Number,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "accounts",
        require: true
    }
},
    { timestamps: true }
)

module.exports = model("comments", commentEntity)