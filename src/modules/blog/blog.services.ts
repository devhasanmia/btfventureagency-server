import AppError from "../../errorHandler/AppError";
import httpStatus from "http-status-codes";
import { sendImage } from "../../config/cloudinary.config";
import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

// ✅ Create a new Blog
const createBlog = async (file: any, payload: IBlog) => {
  const randomString = (length = 5) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const imagePath = file ? file.path : null;
  if (imagePath) {
    const imageName = `${payload.title}-${randomString()}`;
    const { secure_url } = await sendImage(imagePath, imageName);
    payload.picture = secure_url;
  }

  const result = await Blog.create(payload);
  return result;
};

// ✅ Get all Blogs
const getAllBlogs = async () => {
  return await Blog.find().sort({ updatedAt: "desc" });
};

// ✅ Get a single Blog by ID
const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }
  return result;
};

// ✅ Update Blog
const updateBlog = async (id: string, payload: Partial<IBlog>) => {
  const updated = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!updated) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }

  return updated;
};

// ✅ Delete Blog
const deleteBlog = async (id: string) => {
  const deleted = await Blog.findByIdAndDelete(id);
  if (!deleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }
  return deleted;
};

export const BlogServices = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
