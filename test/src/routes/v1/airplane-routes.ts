import express from "express"
import { AirplaneMiddleware } from "../../middlewares"
import { AirplaneController } from "../../controllers/airplane-controller"

const router = express.Router()

const middleware = AirplaneMiddleware.validateCreateRequest

router.use("/",middleware, AirplaneController.createAirplane)

export default router