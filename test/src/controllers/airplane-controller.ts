import { Airplane, Prisma } from "@prisma/client";
import { Response, Request } from "express";
import { AirplaneService } from "../services/airplane-service";
import { StatusCodes } from "http-status-codes";
import { errorResponse } from "../utils/error-handler";
import { successResponse } from "../utils/success-handler";

async function createAirplane(req: Request, res: Response) {
    try {
        const { modelName, capacity }: Pick<Airplane, "modelName" | "capacity"> = req.body

        const airplane = await AirplaneService.createAirplane({ modelName, capacity })

        successResponse(res, "Succesfully created an airplane", airplane, StatusCodes.CREATED)
        return;

    } catch (error) {
        
        errorResponse(res, error);
        return;
    }
}

export const AirplaneController = { createAirplane }