import Hero from "@/components/Hero";
import HotelListing from "@/components/HotelListing";

const HomePage = () => {
  return (
    <main>
      <div className="relative min-h-screen">
        <Hero />
        <img
          src="/assets/hero/hero_1.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      </div>
      <HotelListing />
    </main>
  )
}

export default HomePage