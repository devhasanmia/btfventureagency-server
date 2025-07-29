import { model, Schema } from "mongoose";
import { IPartnership } from "./partnership.interface";

const partnershipSchema = new Schema<IPartnership>(
    {
        name: {
            type: String,
            required: true
        },
        link: {
            type: String
        },
        logo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const Partnership = model<IPartnership>("partnership", partnershipSchema);