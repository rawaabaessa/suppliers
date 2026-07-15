export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  min_order: number;
  quantity_sold?: number;
  category_id: {
    id: number;
    name: string;
  };
  // review this field when make integration to landing page
  unit?: string;
  rating?: number;
  reviewsCount?: number;
  badge?: string;
}
