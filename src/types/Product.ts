export interface ProductVariant {
  size: string;
  availability: number; // stock quantity
}

export interface ProductColor {
  name: string;
  hex: string;
  images: string[];
  variants: ProductVariant[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string; // Main/thumbnail image
  images?: string[]; // Additional images (fallback if colors not used)
  rating: number;
  colors?: ProductColor[]; // Color variants with sizes
}

