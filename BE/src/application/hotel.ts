import Hotel from "../infrastructure/schemas/Hotel";
import NotFoundError from "../domain/errors/not-found-error";
import ValidationError from "../domain/errors/validation-error";
import { Request, Response, NextFunction} from "express";


export const getAllHotels= async(req :Request, res: Response, next:NextFunction)=>{
    try {
        const hotels = await Hotel.find();
        console.log("Success")
        res.json(hotels)
    } catch (error) {
        next(error); 
    }   
};

export const getHotelById= async (req :Request, res: Response, next:NextFunction) => {
    try {
        const hotelId = req.params.id;
        const hotel = await Hotel.findById(hotelId);
        // in order to this to work the id must be 24 characters long
        // else the db will give other errors
        // if invalid hotel id of 24 characters is passed
        // the db will return null
        // else like example 6 characters is passed to the db it gill give other erros
        // which will give 500 error in gobal error handling middleware
        if(!hotel) {
            throw new NotFoundError("Hotel not found");
        }
        res.status(200).json(hotel);
        return;
    } catch (error) {
        next(error);  
    } 
};

export const createHotel = async (req :Request, res: Response, next:NextFunction) => {
    try {
        const hotel = req.body;
    if (
        !hotel.name ||
        !hotel.location ||
        !hotel.rating ||
        !hotel.reviews ||
        !hotel.image ||
        !hotel.price ||
        !hotel.description
    ){
        throw new ValidationError("Invalid hotel data");
    }

    await Hotel.create({
        name: hotel.name,
        location: hotel.location,
        rating: parseFloat(hotel.rating),
        reviews: parseInt(hotel.reviews),
        image: hotel.image,
        price: parseInt(hotel.price),
        description: hotel.description,
    });

    res.status(201).send();
    return;
    } catch (error) {
        next(error);
    }
};

export const deleteHotel =async (req :Request, res: Response, next:NextFunction) =>{
    try {
        const hotelId = req.params.id;
        await Hotel.findByIdAndDelete(hotelId);

        res.status(200).send();
        return;
    } catch (error) {
        next(error);
    }
};

export const updateHotel =async (req :Request, res: Response, next:NextFunction) => {
    try {

        const hotelId = req.params.hotelId;
        const updatedHotel = req.body;
        if (
            !updatedHotel.name ||
            !updatedHotel.location ||
            !updatedHotel.rating ||
            !updatedHotel.reviews ||
            !updatedHotel.image ||
            !updatedHotel.price ||
            !updatedHotel.description
        ){
            throw new ValidationError("Invalid hotel data");
        }

        await Hotel.findByIdAndUpdate(hotelId, updatedHotel);
        res.status(200).send();

        return;
        } catch (error) {
        next(error);   
    }
};