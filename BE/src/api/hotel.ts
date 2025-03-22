import {getAllHotels, getHotelById, createHotel, deleteHotel, updateHotel } from "../application/hotel";
import express from "express";

const hotelsRouter = express.Router();

hotelsRouter.route("/").get(getAllHotels).post(createHotel);
hotelsRouter
  .route("/:id")
  .get(getHotelById)
  .put(updateHotel)
  .delete(deleteHotel);

export default hotelsRouter; 