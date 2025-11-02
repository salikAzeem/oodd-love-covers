import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import PricingBanner from "@/components/PricingBanner";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const Index = () => {
  const { cartItems } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cartItems.length} />
      <main className="flex-1">
        <Hero />
        <Collections />
        <PricingBanner />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
