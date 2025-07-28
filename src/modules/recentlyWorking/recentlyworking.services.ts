import AppError from "../../errorHandler/AppError";
import httpStatus from "http-status-codes";
import { IRecentlyWorking } from "./recentlyworking.interface";
import RecentlyWorking from "./recentlyworking.model";
import { sendImage } from "../../config/cloudinary.config";

// ✅ Create a new RecentlyWorking
const createRecentlyWorking = async (file: any, payload: IRecentlyWorking) => {
  const randomString = (length = 5) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };
  const imagePath = file ? file.path : null;
  if (imagePath) {
    const imageName = `${payload.name}-${randomString()}`;
    const { secure_url } = await sendImage(imagePath, imageName);
    payload.picture = secure_url;
  }
  const result = await RecentlyWorking.create(payload);
  return result;
};

// ✅ Get all RecentlyWorking
const getAllRecentlyWorking = async () => {
  return await RecentlyWorking.find().sort({"updatedAt": "desc"});
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
