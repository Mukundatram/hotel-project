import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Rooms />
      <Gallery />
      <Features />
      <BookingForm />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
