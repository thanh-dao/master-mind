import { Schema, model } from "mongoose";
const postEntity = new Schema({
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: "accounts",
        require: true
    },
    content: {
        type: String,
        require: true
    },
    postType: {
        type: Number,
        require: true
    },
    status: {
        type: Number,
        require: true
    },
    majorId: {
        type: Schema.Types.ObjectId,
        ref: "majors",
        require: true
    }
}, {
    timestamps: true
})

module.exports = model("posts", postEntity)