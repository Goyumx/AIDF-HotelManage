import { useState } from "react";
import HotelCard from "./HotelCard";
import LocationTab from "./LocationTab";
import { useGetHotelsQuery, useGetHotelsASCQuery, useGetHotelsDESCQuery } from "@/lib/api";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FormSchema = z.object({
  type: z.enum(["asc", "desc", "none"], {
    required_error: "You need to select a sorting option.",
  }),
});

export default function HotelListings() {

  const { data: hotels, isLoading, isError, error } = useGetHotelsQuery();
  const { data: hotelsasc } = useGetHotelsASCQuery();
  const { data: hotelsdesc } = useGetHotelsDESCQuery();

  const locations = ["ALL", "France", "Italy", "Australia", "Japan"];

  const [selectedLocation, setSelectedLocation] = useState("ALL");
  const [sortedHotels, setSortedHotels] = useState(null);

  const handleSelectedLocation = (location) => {
    setSelectedLocation(location);
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "none",
    },
  });

  // Handle sorting 
  function onSubmit(data) {
    let sortedData = hotels; // Default list

    if (data.type === "asc") {
      sortedData = hotelsasc;
    } else if (data.type === "desc") {
      sortedData = hotelsdesc;
    }

    setSortedHotels(sortedData);
  }

  // and ek use krm hodai nttn awl ynw state ek athl denawa welawkt
  const displayedHotels = sortedHotels || hotels || [];

  const filteredHotels =
    selectedLocation === "ALL"
      ? displayedHotels
      : displayedHotels.filter((hotel) =>
          hotel.location.toLowerCase().includes(selectedLocation.toLowerCase())
        );

  if (isLoading) {
    return (
        <section className="px-8 py-8 lg:py-16">
        <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top trending hotels worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
            Discover the most trending hotels worldwide for an unforgettable
            experience.
            </p>
        </div>
        <div className="flex items-center gap-x-4">
            {locations.map((location, i) => {
            return (
                <LocationTab
                key={i}
                selectedLocation={selectedLocation}
                name={location}
                onClick={handleSelectedLocation}
                />
            );
            })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
            <p>Loading...</p>
        </div>
        </section>
    );
  }

  if (isError) {
    return (
      <section className="px-8 py-8 lg:py-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top trending hotels worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the most trending hotels worldwide for an unforgettable
            experience.
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          {locations.map((location, i) => {
            return (
              <LocationTab
                key={i}
                selectedLocation={selectedLocation}
                name={location}
                onClick={handleSelectedLocation}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-8 py-8">
      <div className="mb-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          All the Hotels that are Available.
        </h2>
        <p className="text-lg text-muted-foreground">
          Book your perfect stay with us. We have a wide range of hotels to suit every traveler's needs. 
        </p>
      </div>
      <div className="mb-4 flex flex-col md:flex-row justify-between gap-4">
        {/* Location Tabs */}
        <div className="flex items-center gap-x-4">
          {locations.map((location, i) => (
            <LocationTab
              key={i}
              selectedLocation={selectedLocation}
              name={location}
              onClick={handleSelectedLocation}
            />
          ))}
        </div>
        <div className="w-1/4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3">
                          <FormControl>
                            <RadioGroupItem value="none" />
                          </FormControl>
                          <FormLabel className="font-normal">Default</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3">
                          <FormControl>
                            <RadioGroupItem value="desc" />
                          </FormControl>
                          <FormLabel className="font-normal">Price: High to Low</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3">
                          <FormControl>
                            <RadioGroupItem value="asc" />
                          </FormControl>
                          <FormLabel className="font-normal">Price: Low to High</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Apply Sorting</Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)
        ) : (
          <p>No hotels found for this location.</p>
        )}
      </div>
    </section>
  );
}
