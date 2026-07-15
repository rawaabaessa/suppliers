import type { ProductStats } from "../types/Dashboard";
import type { Product } from "../types/Product";
import api from "./api";

export type ProductStatus =
  | "available"
  | "running_low"
  | "out_of_stock"
  | "all";

export async function getProducts() {
  const { data } = await api.get<Product[]>("/dashboard/products");

  return data;
}

export async function getProductsFilter(status: ProductStatus = "all") {
  const { data } = await api.get<Product[]>("/dashboard/productsFilter", {
    params: status === "all" ? {} : { status },
  });

  return data;
}

export const getProductStats = async (): Promise<ProductStats> => {
  const { data } = await api.get("/dashboard/analytics/stats");

  return data;
};
