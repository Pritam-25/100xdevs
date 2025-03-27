import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import AppError from "./app-error";


export function errorResponse(res: Response, error: unknown) {
    let statusCode = (error instanceof AppError) ? error.statusCode : StatusCodes.INTERNAL_SERVER_ERROR;

    let message = error instanceof AppError
        ? error.message
        : error instanceof Error
            ? error.message
            : "Internal Server Error";

    let details = error instanceof AppError ? error.details : null

    res.status(statusCode).json({
        success: false,
        message,
        error: details
    })
}   