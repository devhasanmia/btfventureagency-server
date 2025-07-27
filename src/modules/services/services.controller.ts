import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ServiceServices } from "./services.services";

// ✅ Create Service
const createService = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const service = await ServiceServices.createService(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Service created successfully",
        data: service,
    });
});

// ✅ Get All Services
const getAllServices = catchAsync(async (_req: Request, res: Response, next: NextFunction) => {
    const services = await ServiceServices.getAllServices();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All services fetched successfully",
        data: services,
    });
});

// ✅ Get Single Service
const getSingleService = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const service = await ServiceServices.getSingleService(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service fetched successfully",
        data: service,
    });
});

// ✅ Update Service
const updateService = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const updated = await ServiceServices.updateService(req.params.id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service updated successfully",
        data: updated,
    });
});

// ✅ Delete Service
const deleteService = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const deleted = await ServiceServices.deleteService(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service deleted successfully",
        data: deleted,
    });
});

export const ServiceController = {
    createService,
    getAllServices,
    getSingleService,
    updateService,
    deleteService,
};
