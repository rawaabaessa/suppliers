import { useQuery } from "@tanstack/react-query";
import { getProductStats } from "../services/ProductService";

export function useProductStats() {
  return useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: getProductStats,
  });
}
