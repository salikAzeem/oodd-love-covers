import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";

const policyContent: Record<string, { title: string; content: string[] }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    content: [
      "At OODD, we are committed to protecting your privacy and ensuring the security of your personal information.",
      "We collect information that you provide directly to us, such as when you create an account, place an order, or contact customer support.",
      "Your information is used to process orders, improve our services, and communicate with you about your orders and our products.",
      "We do not sell, trade, or rent your personal information to third parties.",
      "We implement appropriate security measures to protect your personal information from unauthorized access."
    ]
  },
  "shipping": {
    title: "Shipping Policy",
    content: [
      "We offer fixed shipping charges of ₹59 across all locations in India.",
      "Orders are typically processed within 2-3 business days.",
      "Delivery usually takes 5-7 business days depending on your location.",
      "We ship via trusted courier partners to ensure safe delivery of your custom phone covers.",
      "You will receive a tracking number via WhatsApp once your order is shipped.",
      "For any shipping queries, please contact our customer support."
    ]
  },
  "refund": {
    title: "Return & Refund Policy",
    content: [
      "We want you to be completely satisfied with your purchase.",
      "If you receive a damaged or defective product, please contact us within 48 hours of delivery.",
      "Returns are accepted only in case of manufacturing defects or damage during shipping.",
      "Since all covers are custom-made, we cannot accept returns due to change of mind.",
      "Refunds will be processed within 7-10 business days after we receive and inspect the returned product.",
      "Please contact us via WhatsApp with your order details and photos for any return requests."
    ]
  },
  "terms": {
    title: "Terms & Conditions",
    content: [
      "By using our website and services, you agree to these terms and conditions.",
      "All custom phone covers are made to order and cannot be canceled once production has started.",
      "Prices are subject to change without notice, but confirmed orders will honor the agreed price.",
      "You are responsible for providing accurate delivery information.",
      "We reserve the right to refuse service or cancel orders at our discretion.",
      "All intellectual property rights for designs uploaded remain with the respective owners.",
      "By uploading images, you confirm that you have the right to use them for this purpose."
    ]
  }
};

const PolicyPage = () => {
  const { slug } = useParams();
  const { cartItems } = useCart();
  const policy = slug ? policyContent[slug] : null;

  if (!policy) {
    return <div>Policy not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar cartCount={cartItems.length} />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              {policy.title}
            </h1>
            
            <Card className="p-8 rounded-2xl">
              <div className="space-y-6">
                {policy.content.map((paragraph, index) => (
                  <p key={index} className="text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  For any questions regarding this policy, please contact us at hello@oodd.in
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolicyPage;
