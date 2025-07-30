import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema: Schema = new Schema<IBlog>(
    {
        picture: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
        },
        tags: {
            type: [String],
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Blog = model<IBlog>("Blog", blogSchema);

export default Blog;
