import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    picture: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: { type: String },
}, {
    timestamps: true,
    versionKey: false
})

const User = model<IUser>("User", userSchema);

export default User