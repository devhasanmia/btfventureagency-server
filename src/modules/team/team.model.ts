import { model, Schema } from "mongoose";
import { ITeam } from "./team.interface";

const teamSchema = new Schema<ITeam>(
    {
        picture: { type: String },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        designation: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        socials: {
            facebook: { type: String },
            linkedin: { type: String },
            twitter: { type: String },
            telegram: { type: String },
            discord: { type: String },
            github: { type: String },
            website: { type: String },
        },
    },
    {
        timestamps: true,
    }
);

export const Team = model<ITeam>("Team", teamSchema);