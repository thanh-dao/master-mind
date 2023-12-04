import { Schema, model } from "mongoose";
const orderEntity = new Schema({
    tuitorId: {
        type: Schema.Types.ObjectId,
        ref: "tuitors",
        require: true
    },
    accountId: {
        type: Schema.Types.ObjectId,
        ref: "accounts",
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    applicationId: {
        type: Schema.Types.ObjectId,
        ref: "applications",
        require: true
    }
})
module.exports = model("orders", orderEntity)