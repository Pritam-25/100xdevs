import express from "express"
import airplaneRoutes from "./airplane-routes"

const router = express.Router()

router.use("/airplanes", airplaneRoutes)

export default router