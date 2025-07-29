import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { getDashboardCounts } from "./dashboard.service";

export const dashboardController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const service = await getDashboardCounts();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Dashboard data fetched successfully",
      data: service,
    });
  }
);
