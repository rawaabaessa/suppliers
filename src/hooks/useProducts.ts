import { useQuery } from "@tanstack/react-query";
import {
  getProducts,
  getProductsFilter,
  type ProductStatus,
} from "../services/ProductService";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

export function useProductsFilter(productFilter: ProductStatus) {
  return useQuery({
    queryKey: ["productsFilter", productFilter],
    queryFn: () => getProductsFilter(productFilter),
  });
}
