import express, { Request, Response } from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes"

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

app.use("/api", apiRoutes)

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});