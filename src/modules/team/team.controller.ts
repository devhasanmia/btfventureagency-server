import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync"; 
import { sendResponse } from "../../utils/sendResponse";
import { TeamServices } from "./team.services";

// ✅ Create Team Member
const createTeamMember = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const member = await TeamServices.createTeamMember(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Team member created successfully",
        data: member,
    });
});

// ✅ Get All Team Members
const getAllTeamMembers = catchAsync(async (_req: Request, res: Response, next: NextFunction) => {
    const members = await TeamServices.getAllTeamMembers();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All team members fetched successfully",
        data: members,
    });
});

// ✅ Get Single Member
const getSingleTeamMember = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const member = await TeamServices.getSingleTeamMember(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Team member fetched successfully",
        data: member,
    });
});

// ✅ Update Team Member
const updateTeamMember = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const updated = await TeamServices.updateTeamMember(req.params.id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Team member updated successfully",
        data: updated,
    });
});

// ✅ Delete Team Member
const deleteTeamMember = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const deleted = await TeamServices.deleteTeamMember(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Team member deleted successfully",
        data: deleted,
    });
});


export const TeamController = {
    createTeamMember,
    getAllTeamMembers,
    getSingleTeamMember,
    updateTeamMember,
    deleteTeamMember
}
