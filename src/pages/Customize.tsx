import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { phoneBrands, phoneModels } from "@/data/phoneData";

const Customize = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const { cartItems, addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddToCart = () => {
    if (!selectedBrand || !selectedModel || !uploadedImage) {
      toast({
        title: "Missing Information",
        description: "Please select phone model and upload an image",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      id: Date.now().toString(),
      phoneBrand: selectedBrand,
      phoneModel: selectedModel,
      imageUrl: uploadedImage,
      price: 229,
    });

    toast({
      title: "Added to Cart! 🎉",
      description: "Your custom cover has been added to cart",
    });

    navigate("/cart");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar cartCount={cartItems.length} />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Create Your <span className="bg-gradient-romantic bg-clip-text text-transparent">Custom Cover</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Follow these simple steps to design your perfect phone cover
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Customization Panel */}
              <Card className="p-8 space-y-6 rounded-2xl border-2">
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-semibold">Step 1: Select Phone Brand</Label>
                    <Select value={selectedBrand} onValueChange={(value) => {
                      setSelectedBrand(value);
                      setSelectedModel("");
                    }}>
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Choose your phone brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {phoneBrands.map((brand) => (
                          <SelectItem key={brand} value={brand}>
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-semibold">Step 2: Select Phone Model</Label>
                    <Select 
                      value={selectedModel} 
                      onValueChange={setSelectedModel}
                      disabled={!selectedBrand}
                    >
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Choose your phone model" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedBrand && phoneModels[selectedBrand]?.map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-2 block">Step 3: Upload Your Image</Label>
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                        disabled={!selectedModel}
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload or drag & drop
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          PNG, JPG up to 10MB
                        </p>
                      </label>
                    </div>
                  </div>

                  <Button 
                    onClick={handleAddToCart}
                    className="w-full h-12 rounded-full text-base gap-2"
                    size="lg"
                  >
                    Add to Cart
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </Card>

              {/* Preview Panel */}
              <Card className="p-8 rounded-2xl border-2 bg-gradient-lavender">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Preview</h3>
                  
                  <div className="aspect-square bg-card rounded-2xl flex items-center justify-center overflow-hidden">
                    {uploadedImage ? (
                      <img 
                        src={uploadedImage} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-8">
                        <p className="text-muted-foreground">
                          Your design preview will appear here
                        </p>
                      </div>
                    )}
                  </div>

                  {selectedBrand && selectedModel && (
                    <div className="bg-card rounded-xl p-4 space-y-2">
                      <p className="text-sm text-muted-foreground">Selected Model:</p>
                      <p className="font-semibold text-foreground">
                        {selectedBrand} {selectedModel}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Customize;
