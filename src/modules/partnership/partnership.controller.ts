import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { PartnershipServices } from "./partnership.services";

// ✅ Create Partnership Message
const createPartnership = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const partnership = await PartnershipServices.createPartnership(req.file, req.body);
        sendResponse(res, {
            statusCode: httpStatus.CREATED,
            success: true,
            message: "Partnership message submitted successfully.",
            data: partnership,
        });
    }
);

// ✅ Get All Partnership Messages
const getAllPartnerships = catchAsync(
    async (_req: Request, res: Response, next: NextFunction) => {
        const partnerships = await PartnershipServices.getALlPartnership();

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "All partnership messages retrieved successfully.",
            data: partnerships,
        });
    }
);

const deletePartnership = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const partnerships = await PartnershipServices.deletePartnership(req.params.id);
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "partnership delete successfully.",
            data: partnerships,
        });
    }
);

export const PartnershipController = {
    createPartnership,
    getAllPartnerships,
    deletePartnership
};
