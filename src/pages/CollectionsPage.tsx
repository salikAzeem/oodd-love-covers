import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Collections from "@/components/Collections";
import { useCart } from "@/context/CartContext";

const CollectionsPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar cartCount={cartItems.length} />
      <main className="flex-1">
        <div className="bg-gradient-romantic py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Browse Our Collections
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked collections designed for every style and personality
            </p>
          </div>
        </div>
        <Collections />
      </main>
      <Footer />
    </div>
  );
};

export default CollectionsPage;
