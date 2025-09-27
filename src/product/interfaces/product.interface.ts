export interface Product {
  id: number;
  name: string;
  vendorCode: string;
  reviews?: string;
  rating?: number;
  article: string;
  type: string;
  properties?: Record<string, number>;
  description?: string;
  price: number;
  enabled: boolean;
  image?: string;
  quantity: number;
}

export interface newProduct {
  id: number;
  name: string;
  vendorCode: string;
  reviews: string;
  rating: number;
  article: string;
  type: string;
  properties: Record<string, number>;
  description: string;
  price: number;
  enabled: boolean;
  image?: string;
}