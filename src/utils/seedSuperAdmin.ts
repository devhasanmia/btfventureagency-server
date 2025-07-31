import config from "../config"
import { IUser } from "../modules/user/user.interface";
import User from "../modules/user/user.model"
import bcrypt from "bcryptjs";

export const seedSuperAdmin = async () => {
    try {
        const isSuperAdminExist = await User.findOne({ email: config.superAdmin.email });
        if (isSuperAdminExist) {
            return
        }
    const hashPassword = await bcrypt.hash(config.superAdmin.password as string, config.bcrypt.salt_rounds);
        const payload: IUser = {
            name: config.superAdmin.name,
            email: config.superAdmin.email,
            password: hashPassword,
            picture: "https://res.cloudinary.com/dltlqrotv/image/upload/v1753839187/favicon_hhw1ei.png"
        }
        const superAdmin = await User.create(payload)
        console.log("Super Admin Created Successfull");
    } catch (error) {
        console.log(error)
    }
}
