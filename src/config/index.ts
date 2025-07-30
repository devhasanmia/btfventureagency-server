import dotenv from "dotenv";
dotenv.config();

export interface IAppConfig {
  port: number | string;
  env: string;
}

export interface IDatabaseConfig {
  uri: string;
}

export interface IJwtConfig {
  secret: string;
  expires_in: string;
  refresh_secret: string;
  refresh_expires_in: string;
}

export interface IBcryptConfig {
  salt_rounds: number;
}
export interface ISuperAdminConfig {
  name: string;
  email: string;
  password: string;
}


export interface ICloudinary {
  cloudinary_cloud_name: string
  cloudinary_api_key: string
  cloudinary_api_secret: string
}

export interface IConfig {
  app: IAppConfig;
  database: IDatabaseConfig;
  jwt: IJwtConfig;
  bcrypt: IBcryptConfig;
  superAdmin: ISuperAdminConfig;
  cloudinary: ICloudinary;
}

const config: IConfig = {
  app: {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || "development",
  },
  database: {
    uri: process.env.DATABASE || "",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "",
    expires_in: process.env.JWT_EXPIRES_IN || "1h",
    refresh_secret: process.env.JWT_REFRESH_SECRET || "",
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN || "30d",
  },
  bcrypt: {
    salt_rounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || "10", 10),
  },
  superAdmin: {
    name: process.env.SUPER_ADMIN_NAME || "SUPER ADMIN",
    email: process.env.SUPER_ADMIN_EMAIL || "infobtfventureagency@gmail.com",
    password: process.env.SUPER_ADMIN_PASSWORD || "03c7c0ace395",
  },
  cloudinary: {
    cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY as string,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET as string
  }
};

export default config;
