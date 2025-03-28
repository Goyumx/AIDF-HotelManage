import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "lucide-react"; 
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useCreateBookingMutation } from "@/lib/api";

const formSchema = z.object({
    checkIn: z.date(),
    checkOut: z.date(),
    roomNumber: z.number().min(1).max(200),
});

const BookingForm = (props) => {

    const [createHotel, { isLoading }] = useCreateBookingMutation();
    const { hotelId } = props; 
    const { user } = useUser(); // Get userId from Clerk
    const userId = user?.id; // Ensure userId is available
    const navigate = useNavigate();


    const form = useForm({ resolver: zodResolver(formSchema), });

    const handleSubmit = async (values) => { 

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { checkIn, checkOut, roomNumber } = values;
    const bookingData = {
        hotelId,
        userId,
        checkIn,
        checkOut,
        roomNumber,
    };
    
    try {
        toast.loading("Creating Booking...");
        await createHotel(bookingData).unwrap();
        toast.success("Hotel Booking success");
    } catch (error) {
        toast.error("Booking failed");
        console.error(error); 
    }

    console.log("Booking Data:" , bookingData);
    setTimeout(() => {
        navigate(`/`);
      }, 2000)
};

  return (
    
    <Form {...form}>
    <form className="  ml-18 mr-18 w-5/7" onSubmit={form.handleSubmit(handleSubmit)}>

    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">  
        <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>
        <label className="block font-medium mb-1">Select Dates</label>

    <FormField
        control={form.control}
        name="checkIn"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Hotel Name</FormLabel>
            <Popover>
            
            <PopoverTrigger asChild>
            <FormControl>
            <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
            
            <CalendarIcon className="mr-2 h-4 w-4" />
            {field.value ? format(field.value, "PPP") : <span>Check out Date</span>}
            </Button>
            </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
                />
            </PopoverContent>
            </Popover>
            <FormMessage />
            </FormItem>
        )}
    />

    <FormField
        control={form.control}
        name="checkOut"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Hotel Name</FormLabel>
            <Popover>
            <PopoverTrigger asChild>
            <FormControl>
            <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {field.value ? format(field.value, "PPP") : <span>Check out Date</span>}
            </Button>
            </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
                />
            </PopoverContent>
            </Popover>
            <FormMessage />
            </FormItem>
        )}
    />
    
    <FormField
        control={form.control}
        name="roomNumber"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Hotel Name</FormLabel>
            <FormControl>
                <Input type="number"
                    placeholder="Enter room number"
                    onChange={(e) => {
                      field.onChange(parseFloat(e.target.value));
                    }}
                    value={field.value} />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
    /> 
    </div>
    <div className="flex justify-center p-3">
    <Button type="submit" >Confirm Booking</Button>
    </div>
    </form>
    </Form>
  );
};

export default BookingForm;
