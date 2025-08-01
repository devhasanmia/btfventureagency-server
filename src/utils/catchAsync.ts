import { NextFunction, Request, Response } from "express";

type TCatchAsync = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const catchAsync = (fn: TCatchAsync) =>
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next).catch((error: any) => {
            next(error);
        }));
    }

export default catchAsync;
