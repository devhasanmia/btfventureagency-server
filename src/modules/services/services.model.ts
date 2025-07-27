import { model, Schema } from "mongoose";
import { IServices } from "./services.interface";

const servicesSchema = new Schema<IServices>(
    {
        name: {
            type: String,
            required: true
        },
        link: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

export const Services = model<IServices>("Service", servicesSchema);