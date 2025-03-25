import {getAllHotels, getHotelById, createHotel, deleteHotel, updateHotel } from "../application/hotel";
import express from "express";
import { isAuthenticated } from "./middleware/authentication-middleware";

const hotelsRouter = express.Router();

hotelsRouter.route("/").get(getAllHotels).post(isAuthenticated, createHotel);
hotelsRouter
  .route("/:id")
  .get(getHotelById)
  .put(updateHotel)
  .delete(deleteHotel);

export default hotelsRouter; 