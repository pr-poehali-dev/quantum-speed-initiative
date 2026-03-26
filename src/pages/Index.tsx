import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onBook={() => setBookingOpen(true)} />
      <Hero onBook={() => setBookingOpen(true)} />
      <Featured onBook={() => setBookingOpen(true)} />
      <Promo />
      <Footer />
      <BookingForm isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
};

export default Index;
