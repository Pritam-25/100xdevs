import { NextFunction, Request, Response } from "express";
import { airplaneSchema } from "../validators/airplane-validator";
import { StatusCodes } from "http-status-codes";
import { errorResponse } from "../utils/error-handler";
import AppError from "../utils/app-error";

function validateCreateRequest(req: Request, res: Response, next: NextFunction) {
    const validation = airplaneSchema.safeParse(req.body);

    if (!validation.success) {
        const formattedErrors = validation.error.format();

        // Transform Zod's error format into a clean key-value pair structure
        const errorDetails = Object.entries(formattedErrors)
            .filter(([key]) => key !== "_errors") // Ignore top-level _errors
            .reduce((acc, [key, value]) => {
                if (typeof value === "object" && value !== null && "_errors" in value) {
                    if (Array.isArray(value._errors) && value._errors.length > 0) {
                        acc[key] = value._errors[0]; // Store first error message
                    }
                }
                return acc;
            }, {} as Record<string, string>);

        return errorResponse(
            res,
            new AppError("Validation failed", StatusCodes.BAD_REQUEST, errorDetails)
        );
    }

    req.body = validation.data;
    next();
}


export const AirplaneMiddleware = { validateCreateRequest }