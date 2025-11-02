import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CustomerDetails } from "@/types/cart";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const { toast } = useToast();
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 59;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (!customerDetails.name || !customerDetails.phone || !customerDetails.address || !customerDetails.pincode) {
      toast({
        title: "Missing Information",
        description: "Please fill all the details",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const orderDetails = cartItems.map((item, index) => 
      `${index + 1}. ${item.phoneBrand} ${item.phoneModel}`
    ).join("\n");

    const message = `Hi! I want to order custom phone covers:\n\n${orderDetails}\n\nCustomer Details:\nName: ${customerDetails.name}\nPhone: ${customerDetails.phone}\nAddress: ${customerDetails.address}\nPincode: ${customerDetails.pincode}\n\nTotal Amount: ₹${total} (including ₹${shipping} delivery)`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your order via WhatsApp",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar cartCount={cartItems.length} />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <Card className="p-12 text-center rounded-2xl">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some beautiful covers to get started!</p>
              <Link to="/customize">
                <Button size="lg" className="rounded-full">
                  Start Customizing
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="p-6 rounded-2xl">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={item.imageUrl} 
                          alt="Cover preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">
                          {item.phoneBrand} {item.phoneModel}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">Custom Design</p>
                        <p className="text-lg font-bold text-primary mt-2">₹{item.price}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Checkout Panel */}
              <div className="space-y-6">
                <Card className="p-6 rounded-2xl">
                  <h2 className="text-xl font-bold text-foreground mb-4">Customer Details</h2>
                  <div className="space-y-4">
                    <div>
                      <Label>Full Name</Label>
                      <Input
                        value={customerDetails.name}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                        placeholder="Enter your name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Phone Number</Label>
                      <Input
                        value={customerDetails.phone}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                        placeholder="Enter your phone"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Delivery Address</Label>
                      <Textarea
                        value={customerDetails.address}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, address: e.target.value })}
                        placeholder="Enter your complete address"
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label>Pincode</Label>
                      <Input
                        value={customerDetails.pincode}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, pincode: e.target.value })}
                        placeholder="Enter pincode"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 rounded-2xl">
                  <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between text-foreground">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-foreground">
                      <span>Delivery Charges</span>
                      <span>₹{shipping}</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between text-lg font-bold text-foreground">
                        <span>Total</span>
                        <span>₹{total}</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={handleCheckout}
                    className="w-full mt-6 rounded-full h-12"
                    size="lg"
                  >
                    Checkout via WhatsApp
                  </Button>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
