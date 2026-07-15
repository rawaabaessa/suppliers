import type { FinancialPerformance, OrderStatus } from "../types/Dashboard";
import api from "./api";

export type Range = "2days" | "week" | "month";

export const getBestSellers = async (range: Range) => {
  const { data } = await api.get(
    `/dashboard/analytics/best-sellers?range=${range}`,
  );

  return data;
};

export const getFinancialPerformance = async (): Promise<
  FinancialPerformance[]
> => {
  const { data } = await api.get("/dashboard/analytics/financial-performance");

  return data;
};

export const getOrderStatus = async (): Promise<OrderStatus[]> => {
  const { data } = await api.get("/dashboard/analytics/order-status");

  return data;
};
