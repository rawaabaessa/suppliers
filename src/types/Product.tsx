export interface Product {
  id: number;
  name: string;
  farmName: string;
  location: string;
  image: string;
  price: number;
  unit: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
}
