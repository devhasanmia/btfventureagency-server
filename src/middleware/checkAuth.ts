import { NextFunction, Request, Response } from "express";
import AppError from "../errorHandler/AppError";
import { verifyToken } from "../utils/jwt";
import config from "../config";
import { JwtPayload } from "jsonwebtoken";

export const checkAuth = () => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessToken = req.headers.authorization;
        if (!accessToken) {
            throw new AppError(403, "Unauthenticated: No token provided")
        }
        const verifiedToken = verifyToken(accessToken, config.jwt.secret) as JwtPayload;
        req.user = verifiedToken 
        next()
    } catch (error) {
        next(error)
    }
}