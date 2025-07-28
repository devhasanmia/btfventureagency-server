import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ContactServices } from "./contact.services";

// ✅ Create Service
const createContact = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const service = await ContactServices.createContact(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Message Send successfully",
        data: service,
    });
});

// ✅ Get All Services
const getAllContact = catchAsync(async (_req: Request, res: Response, next: NextFunction) => {
    const services = await ContactServices.getAllContact();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All Message fetched successfully",
        data: services,
    });
});



export const ContactController = {
    createContact,
    getAllContact
};
