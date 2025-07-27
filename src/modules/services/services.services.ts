import { Services } from "./services.model";
import AppError from "../../errorHandler/AppError";
import httpStatus from "http-status-codes";
import { IServices } from "./services.interface";

// ✅ Create a new service
const createService = async (payload: IServices) => {
    const service = await Services.create(payload);
    return service;
};

// ✅ Get all services
const getAllServices = async () => {
    return await Services.find();
};

// ✅ Get a single service by ID
const getSingleService = async (id: string) => {
    const service = await Services.findById(id);
    if (!service) {
        throw new AppError(httpStatus.NOT_FOUND, "Service not found");
    }
    return service;
};

// ✅ Update a service
const updateService = async (id: string, payload: Partial<IServices>) => {
    const updated = await Services.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!updated) {
        throw new AppError(httpStatus.NOT_FOUND, "Service not found");
    }
    return updated;
};

// ✅ Delete a service
const deleteService = async (id: string) => {
    const deleted = await Services.findByIdAndDelete(id);
    if (!deleted) {
        throw new AppError(httpStatus.NOT_FOUND, "Service not found");
    }
    return deleted;
};

export const ServiceServices = {
    createService,
    getAllServices,
    getSingleService,
    updateService,
    deleteService,
};
