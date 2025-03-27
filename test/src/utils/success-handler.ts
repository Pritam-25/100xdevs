import { Response } from "express";
import { StatusCodes } from "http-status-codes";


export function successResponse(
    res: Response,
    message: String,
    data:any  = null,
    statusCode: number = StatusCodes.OK
){
    res.status(statusCode).json({
        success: true,
        message,
        data
    })
}