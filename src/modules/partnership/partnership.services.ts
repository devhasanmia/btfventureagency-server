import { sendImage } from "../../config/cloudinary.config";
import { IPartnership } from "./partnership.interface";
import { Partnership } from "./partnership.model";


const createPartnership = async (file: any, payload: IPartnership) => {
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
        payload.logo = secure_url;
    }
    const contact = await Partnership.create(payload);
    return contact;
};

const getALlPartnership = async () => {
    return await Partnership.find().sort({ "updatedAt": "desc" });
};
const deletePartnership = async (id: string) => {
    return await Partnership.findByIdAndDelete(id);
};

export const PartnershipServices = {
    createPartnership,
    getALlPartnership,
    deletePartnership
};
