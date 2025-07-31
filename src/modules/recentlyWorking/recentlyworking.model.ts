import { model, Schema } from "mongoose";
import { IRecentlyWorking } from "./recentlyworking.interface";

const RecentlyWorkingSchema: Schema = new Schema<IRecentlyWorking>({
    picture: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    launch: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Live', 'Upcoming'],
        required: true
    },
    link: { type: String }
}, {
    timestamps: true
});

const RecentlyWorking = model<IRecentlyWorking> ("RecentlyWorking", RecentlyWorkingSchema);

export default RecentlyWorking