import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    blog: {
        type: String,
        require: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export const Blog = new mongoose.model("Blog", blogSchema)