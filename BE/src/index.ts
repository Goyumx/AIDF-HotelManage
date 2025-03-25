import "dotenv/config";
import express from "express";
import hotelsRouter from "./api/hotel";
import connectDB from "./infrastructure/db";
import bookingsRouter from "./api/booking";
import cors from "cors";
import globalErrorHandlingMiddleware from "./api/middleware/global-error-handling-middleware";
import { clerkMiddleware } from "@clerk/express";

const app = express();

app.use(clerkMiddleware());
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/hotels", hotelsRouter);
app.use("/api/bookings", bookingsRouter);

app.use(globalErrorHandlingMiddleware);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));