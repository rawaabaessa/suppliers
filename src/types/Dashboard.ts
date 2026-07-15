export interface ProductStats {
  total_products: number;
  low_stock: number;
  out_of_stock: number;
  shipping_orders: number;
}

export interface FinancialPerformance {
  month: string;
  sales: number;
}

export interface OrderStatus {
  name: string;
  value: number;
  color: string;
}
