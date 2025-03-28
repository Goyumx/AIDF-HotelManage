import ExploreGrid from "@/components/ExploreGrid";
import Hero from "@/components/Hero";
import HotelListing from "@/components/HotelListing";
import Testimonials from "@/components/Testimonials";

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
      <ExploreGrid />
      <Testimonials />
    </main>
  )
}

export default HomePage