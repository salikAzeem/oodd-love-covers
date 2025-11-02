import { Sparkles, Truck } from "lucide-react";

const PricingBanner = () => {
  return (
    <section className="py-16 bg-gradient-lavender">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Limited Time Offer</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              All Covers
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl md:text-4xl text-muted-foreground line-through">
                ₹458
              </span>
              <span className="text-6xl md:text-7xl font-bold bg-gradient-romantic bg-clip-text text-transparent">
                ₹229
              </span>
            </div>
            <p className="text-xl md:text-2xl font-semibold text-primary">
              After 50% OFF 🎉
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 bg-card/50 backdrop-blur-sm px-8 py-4 rounded-2xl inline-flex">
            <Truck className="w-6 h-6 text-accent" />
            <span className="text-lg font-bold text-foreground">
              ₹59 Fixed Delivery Across India 🇮🇳
            </span>
          </div>

          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Premium quality phone covers at unbeatable prices. Free design customization included!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
