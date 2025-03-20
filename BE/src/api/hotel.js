import {getAllHotels, getHotelById, createHotel, deleteHotel, updateHotel } from "../application/hotel.js";
import express from "express";

const hotelsRouter = express.Router();

hotelsRouter.get("/", getAllHotels);
hotelsRouter.get("/:id", getHotelById);
hotelsRouter.post("/", createHotel);
hotelsRouter.delete("/:id", deleteHotel);
hotelsRouter.put("/:id", updateHotel);

export default hotelsRouter; 