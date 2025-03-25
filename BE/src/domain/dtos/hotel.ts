import { z } from "zod"

export const CreateHotelDTO = z.object({
    name: z.string(),
    location: z.string(),
    image: z.string(),
    price: z.number(),
    rating: z.number(),
    reviews: z.number(),
    description: z.string()
});