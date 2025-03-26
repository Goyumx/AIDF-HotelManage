import {getAllHotels, getHotelById, createHotel, deleteHotel, updateHotel, generateResponse } from "../application/hotel";
import express from "express";
import { isAuthenticated } from "./middleware/authentication-middleware";
import { isAdmin } from "./middleware/authorization-middleware";
import { createEmbeddings } from "../application/embeddings";
import { retrieve } from "../application/retrieve";

const hotelsRouter = express.Router();

hotelsRouter.route("/").get(getAllHotels).post(isAuthenticated,isAdmin, createHotel);
hotelsRouter
  .route("/:id")
  .get(getHotelById)
  .put(updateHotel)
  .delete(deleteHotel);
hotelsRouter.route("/embeddings/create").post(createEmbeddings);
hotelsRouter.route("/search/retrieve").get(retrieve);


export default hotelsRouter; 