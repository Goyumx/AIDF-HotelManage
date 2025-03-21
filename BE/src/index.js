import "dotenv/config";
import express from "express";
import hotelsRouter from "./api/hotel.js";
import connectDB from "./infrastructure/db.js";
import usersRouter from "./api/user.js";
import bookingsRouter from "./api/booking.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/hotels", hotelsRouter);
app.use("/api/user", usersRouter);
app.use("/api/bookings", bookingsRouter);

app.listen(8000, console.log("Server Running"));