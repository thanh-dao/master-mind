import { Schema, model } from "mongoose";
const reactionEntity = new Schema({
    type: {
        type: Number
    },
    icon: {
        type: Number
    }
})

module.exports = model("reactions", reactionEntity)