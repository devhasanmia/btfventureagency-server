import AppError from "../../errorHandler/AppError";
import httpStatus from "http-status-codes";
import { IRecentlyWorking } from "./recentlyworking.interface";
import RecentlyWorking from "./recentlyworking.model";

// ✅ Create a new RecentlyWorking
const createRecentlyWorking = async (payload: IRecentlyWorking) => {
  const result = await RecentlyWorking.create(payload);
  return result;
};

// ✅ Get all RecentlyWorking
const getAllRecentlyWorking = async () => {
  return await RecentlyWorking.find();
};

// ✅ Get a single RecentlyWorking by ID
const getSingleRecentlyWorking = async (id: string) => {
  const result = await RecentlyWorking.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Recently working data not found");
  }
  return result;
};

// ✅ Update RecentlyWorking
const updateRecentlyWorking = async (
  id: string,
  payload: Partial<IRecentlyWorking>
) => {
  const updated = await RecentlyWorking.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!updated) {
    throw new AppError(httpStatus.NOT_FOUND, "Recently working data not found");
  }
  return updated;
};

// ✅ Delete RecentlyWorking
const deleteRecentlyWorking = async (id: string) => {
  const deleted = await RecentlyWorking.findByIdAndDelete(id);
  if (!deleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Recently working data not found");
  }
  return deleted;
};

export const RecentlyWorkingServices = {
  createRecentlyWorking,
  getAllRecentlyWorking,
  getSingleRecentlyWorking,
  updateRecentlyWorking,
  deleteRecentlyWorking,
};
