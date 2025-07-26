import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync"; 
import { sendResponse } from "../../utils/sendResponse";
import { RecentlyWorkingServices } from "./recentlyworking.services"; // adjust path if needed

// ✅ Create RecentlyWorking
const createRecentlyWorking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await RecentlyWorkingServices.createRecentlyWorking(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Recently working data created successfully",
    data: result,
  });
});

// ✅ Get All RecentlyWorking
const getAllRecentlyWorking = catchAsync(async (_req: Request, res: Response, next: NextFunction) => {
  const result = await RecentlyWorkingServices.getAllRecentlyWorking();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All recently working data fetched successfully",
    data: result,
  });
});

// ✅ Get Single RecentlyWorking
const getSingleRecentlyWorking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await RecentlyWorkingServices.getSingleRecentlyWorking(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single recently working data fetched successfully",
    data: result,
  });
});

// ✅ Update RecentlyWorking
const updateRecentlyWorking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await RecentlyWorkingServices.updateRecentlyWorking(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Recently working data updated successfully",
    data: result,
  });
});

// ✅ Delete RecentlyWorking
const deleteRecentlyWorking = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await RecentlyWorkingServices.deleteRecentlyWorking(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Recently working data deleted successfully",
    data: result,
  });
});

export const RecentlyWorkingController = {
  createRecentlyWorking,
  getAllRecentlyWorking,
  getSingleRecentlyWorking,
  updateRecentlyWorking,
  deleteRecentlyWorking,
};
