import { Schema, model } from "mongoose";
const majorEntity = new Schema({
    name: {
        type: String,
        require: true
    }
})

module.exports = model("majors", majorEntity)