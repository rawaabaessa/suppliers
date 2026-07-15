import { useQuery } from "@tanstack/react-query";
import { getBestSellers, type Range } from "../services/analytics";

export function useBestSellers(range: Range) {
  return useQuery({
    queryKey: ["best-sellers", range],
    queryFn: () => getBestSellers(range),
  });
}
