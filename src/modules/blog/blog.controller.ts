import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BlogServices } from "./blog.services";

// ✅ Create Blog
const createBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await BlogServices.createBlog(req.file, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

// ✅ Get All Blogs
const getAllBlogs = catchAsync(async (_req: Request, res: Response, next: NextFunction) => {
  const result = await BlogServices.getAllBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All blogs fetched successfully",
    data: result,
  });
});

// ✅ Get Single Blog
const getSingleBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await BlogServices.getSingleBlog(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single blog fetched successfully",
    data: result,
  });
});

// ✅ Update Blog
const updateBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await BlogServices.updateBlog(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

// ✅ Delete Blog
const deleteBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await BlogServices.deleteBlog(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted successfully",
    data: result,
  });
});

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
