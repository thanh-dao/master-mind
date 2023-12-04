import { Schema, model } from "mongoose";
const tuitorEntity = new Schema({
    accountId: {
        type: Schema.Types.ObjectId,
        ref: "accounts",
        require: true
    },
    rating: {
        type: Number
    }
})

module.exports = model("tuitors", tuitorEntity)