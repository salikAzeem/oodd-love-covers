import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import aestheticImg from "@/assets/collection-aesthetic.jpg";
import coupleImg from "@/assets/collection-couple.jpg";
import trendyImg from "@/assets/collection-trendy.jpg";
import minimalImg from "@/assets/collection-minimal.jpg";
import animeImg from "@/assets/collection-anime.jpg";

const collections = [
  {
    title: "Aesthetic Vibes",
    image: aestheticImg,
    description: "Dreamy and artistic designs",
  },
  {
    title: "Couple Goals",
    image: coupleImg,
    description: "Perfect for you & your love",
  },
  {
    title: "Trendy Designs",
    image: trendyImg,
    description: "Stay ahead of the curve",
  },
  {
    title: "Minimal & Classy",
    image: minimalImg,
    description: "Elegant simplicity",
  },
  {
    title: "Anime / Bold",
    image: animeImg,
    description: "Express your bold side",
  },
];

const Collections = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections designed to match every mood and personality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link key={index} to="/collections" className="group">
              <Card className="overflow-hidden border-2 hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {collection.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
