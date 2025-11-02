export interface CartItem {
  id: string;
  phoneBrand: string;
  phoneModel: string;
  imageUrl: string;
  price: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  pincode: string;
}
