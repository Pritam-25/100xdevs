import { Prisma } from "@prisma/client";
import AirplaneRepository from "../repositories/airplane-repository";
import AppError from "../utils/app-error";
import { StatusCodes } from "http-status-codes";

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data: Prisma.AirplaneCreateInput) {
    try {
        const airplane = await airplaneRepository.create(data)

        if (!airplane) {
            throw new AppError("Failed to create airplane", StatusCodes.BAD_REQUEST)
        }

        return airplane

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                throw new AppError("Something went wrong while creating the airplane", StatusCodes.CONFLICT, {message: `Unique constraint failed on: ${error.meta?.target}`})
            }
        }

        throw new AppError("Internal Server Error", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

export const AirplaneService = { createAirplane }