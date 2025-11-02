import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, ShoppingBag } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-romantic py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Make Your Cover,
              <br />
              <span className="bg-gradient-lavender bg-clip-text text-transparent">
                Make It Yours 💖
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Transform your phone into a masterpiece with our custom covers. Express yourself with designs that match your vibe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/customize">
                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full shadow-lg hover:shadow-xl transition-all">
                  <Upload className="w-5 h-5" />
                  Upload Your Image
                </Button>
              </Link>
              <Link to="/collections">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 rounded-full border-2 hover:bg-secondary/50">
                  <ShoppingBag className="w-5 h-5" />
                  Shop Now
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-8">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">💝</span>
                <span className="text-sm font-medium">Made with Love</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">🇮🇳</span>
                <span className="text-sm font-medium">Pan India Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">🔒</span>
                <span className="text-sm font-medium">100% Secure</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-float">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroPhone}
                alt="Beautiful phone cover"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
