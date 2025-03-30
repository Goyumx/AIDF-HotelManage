import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/`,
        prepareHeaders: async (headers, { getState }) => {
            const token = await window?.Clerk?.session?.getToken();
            console.log(token);
            if (token) {
              headers.set('Authorization', `Bearer ${token}`);
            }
          }
        }),
    endpoints: (builder) => ({
    getHotels: builder.query({
      query: () => "hotels",
    }),
    getHotelsASC: builder.query({
      query: () => "hotels/asc",
    }),
    getHotelsDESC: builder.query({
      query: () => "hotels/desc",
    }),
    getHotelsForSearchQuery: builder.query({
      query: ({ query }) => `hotels/search/retrieve?query=${query}`,
    }),
    getHotelById: builder.query({
      query: (id) => `hotels/${id}`,
    }),
    createHotel: builder.mutation({
      query: (hotel) => ({
        url: "hotels",
        method: "POST",
        body: hotel,
      }),
    }),
    createBooking: builder.mutation({
      query: (booking) => ({
        url: "bookings",
        method: "POST",
        body: booking,
      }),
    }),
    
  }),
});

export const {useGetHotelsQuery, useGetHotelsASCQuery, useGetHotelsDESCQuery, useGetHotelsForSearchQueryQuery, useGetHotelByIdQuery, useCreateHotelMutation, useCreateBookingMutation,  } = api;