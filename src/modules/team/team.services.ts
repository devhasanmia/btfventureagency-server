import { Team } from "./team.model";
import { ITeam } from "./team.interface";
import AppError from "../../errorHandler/AppError";
import httpStatus from "http-status-codes"

// ✅ Create a new team member
const createTeamMember = async (payload: ITeam) => {
    const isEmailExists = await Team.findOne({ email: payload.email });
    if (isEmailExists) {
        throw new AppError(httpStatus.BAD_REQUEST, "Team member with this email already exists")
    }
    const member = await Team.create(payload);
    return member;
};

// ✅ Get all team members
const getAllTeamMembers = async () => {
    return await Team.find();
};

// ✅ Get a single team member by ID
const getSingleTeamMember = async (id: string) => {
    const member = await Team.findById(id);
    if (!member) {
        throw new Error("Team member not found");
    }
    return member;
};

// ✅ Update a team member
const updateTeamMember = async (id: string, payload: Partial<ITeam>) => {
    const updated = await Team.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!updated) {
        throw new Error("Team member not found");
    }
    return updated;
};

// ✅ Delete a team member
const deleteTeamMember = async (id: string) => {
    const deleted = await Team.findByIdAndDelete(id);
    if (!deleted) {
        throw new Error("Team member not found");
    }
    return deleted;
};

export const TeamServices = {
    createTeamMember,
    getAllTeamMembers,
    getSingleTeamMember,
    updateTeamMember,
    deleteTeamMember
}