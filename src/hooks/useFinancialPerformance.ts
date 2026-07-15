import { useQuery } from "@tanstack/react-query";
import { getFinancialPerformance } from "../services/analytics";

export function useFinancialPerformance() {
  return useQuery({
    queryKey: ["financial-performance"],
    queryFn: getFinancialPerformance,
  });
}
