import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import Menu from "@/components/sections/Menu";
import ChefSpecial from "@/components/sections/ChefSpecial";
import Gallery from "@/components/sections/Gallery";
import Membership from "@/components/sections/Membership";
import Testimonials from "@/components/sections/Testimonials";
import ReservationCTA from "@/components/sections/ReservationCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Menu />
        <ChefSpecial />
        <Gallery />
        <Membership />
        <Testimonials />
        <ReservationCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
