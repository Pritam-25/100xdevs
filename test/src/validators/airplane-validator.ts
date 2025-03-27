// src/validators/airplane-validator.ts
import { z } from "zod";

export const airplaneSchema = z.object({
    modelName: z.string()
        .min(1, "Model name is required")
        .regex(/^[a-zA-Z0-9]+$/, "Model name must be alphanumeric, not contain any space"),

    capacity: z.number({
        required_error: "Capacity is required",
        invalid_type_error: "Capacity must be a number",
    })
        .int("Capacity must be an integer")
        .positive("Capacity must be a positive number")
        .max(1000, "Capacity cannot exceed 1000"),
});