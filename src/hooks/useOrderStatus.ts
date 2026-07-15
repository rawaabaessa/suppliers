import { useQuery } from "@tanstack/react-query";
import { getOrderStatus } from "../services/analytics";

export function useOrderStatus() {
  return useQuery({
    queryKey: ["order-status"],
    queryFn: getOrderStatus,
  });
}
