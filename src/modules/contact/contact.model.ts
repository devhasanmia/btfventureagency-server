import { model, Schema } from "mongoose";
import { IContact } from "./contact.interface";

const contactSchema = new Schema<IContact>(
    {
        interest: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        projectSocial: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

export const Contact = model<IContact>("contact", contactSchema);