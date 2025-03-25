import {getAllHotels, getHotelById, createHotel, deleteHotel, updateHotel, generateResponse } from "../application/hotel";
import express from "express";
import { isAuthenticated } from "./middleware/authentication-middleware";
import { isAdmin } from "./middleware/authorization-middleware";

const hotelsRouter = express.Router();

hotelsRouter.route("/").get(getAllHotels).post(isAuthenticated,isAdmin, createHotel);
hotelsRouter
  .route("/:id")
  .get(getHotelById)
  .put(updateHotel)
  .delete(deleteHotel);
hotelsRouter.route("/llm").post(generateResponse);

export default hotelsRouter; 