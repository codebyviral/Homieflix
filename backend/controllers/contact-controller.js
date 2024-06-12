import { ContactModel } from "../models/contact-model.js"

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await ContactModel.create(response)
        return res.status(200).json({ msg: "message send successfully" })
    } catch (error) {
        return res.status(500).json({ msg: "message not delivered" })
    }
}

export { contactForm }