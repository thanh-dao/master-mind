import { Schema, model } from "mongoose";
const postReactionEntity = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: "posts",
        require: true
    },
    reactionId: {
        type: Schema.Types.ObjectId,
        ref: "reactions"
    },
    accountId: {
        type: Schema.Types.ObjectId,
        ref: "accounts",
        require: true
    }
}, { timestamps: true })

module.exports = model("postReactions", postReactionEntity)