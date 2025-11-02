import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Absolutely love my custom cover! The quality is amazing and it arrived so fast. Highly recommend! 💖",
    location: "Mumbai",
  },
  {
    name: "Rahul Verma",
    rating: 5,
    text: "Got matching covers for me and my girlfriend. The print quality is fantastic. Worth every rupee!",
    location: "Delhi",
  },
  {
    name: "Ananya Singh",
    rating: 5,
    text: "Best phone cover I've ever owned. The design looks exactly like my photo. Super happy! ✨",
    location: "Bangalore",
  },
  {
    name: "Arjun Patel",
    rating: 5,
    text: "Great quality and fast delivery! The customer service is also very responsive. Will order again!",
    location: "Ahmedabad",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">❤️</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Loved by 1000+ Customers
            </h2>
          </div>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-lg font-semibold text-foreground">5.0 Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  "{review.text}"
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join thousands of happy customers who trust OODD for their phone covers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
