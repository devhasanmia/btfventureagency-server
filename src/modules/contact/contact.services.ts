import { IContact } from "./contact.interface";
import { Contact } from "./contact.model";

const createContact = async (payload: IContact) =>{
    const contact = await Contact.create(payload);
    return contact;
};

const getAllContact = async () => {
    return await Contact.find().sort({"updatedAt": "desc"});
};

export const ContactServices = {
    createContact,
    getAllContact,
};
