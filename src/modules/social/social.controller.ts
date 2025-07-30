import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import SocialLinks from "./social.model";

const getSocialLinks = catchAsync(async (_req: Request, res: Response, next: NextFunction) => {
    let result = await SocialLinks.findOne();
    if (!result) {
        // ডিফল্ট ডাটা ইনসার্ট
        result = await SocialLinks.create({
            linkedin: "https://linkedin.com/in/yourprofile",
            discord: "https://discord.com/users/yourprofile",
            twitter: "https://twitter.com/yourprofile",
            telegram: "https://t.me/yourprofile",
            email: "infobtfventureagency@gmail.com"
        });
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Social links fetched successfully",
        data: result,
    });
});

// UPDATE Social Links
const updateSocialLinks = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const updates = req.body;
    // প্রথম ডকুমেন্টে আপডেট, না থাকলে তৈরি করবে
    const result = await SocialLinks.findOneAndUpdate({}, updates, {
        new: true,
        upsert: true,
    });
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Social links updated successfully",
        data: result,
    });
});

export const SocialLinksController = {
    getSocialLinks,
    updateSocialLinks,
};
