import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    fullname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    }
})

const ContactModel = new model("Contact", contactSchema)

export { ContactModel }