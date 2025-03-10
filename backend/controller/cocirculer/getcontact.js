import { ContactModel } from "../../models/contact.js";

const getcontact = async (req,res) => {
    try {
        const data = await ContactModel.find({});
        res.json({ success: true, message: "get All contact", data});

    } catch (error) {
        console.log(error);
        res.json({success: false, message:  error.message})
    }
}

export default getcontact