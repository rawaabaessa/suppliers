export type StockStatus = {
  label: string;
  variant: "success" | "warning" | "danger";
};

export function getStockStatus(quantity: number): StockStatus {
  if (quantity === 0) {
    return {
      label: "Out of Stock",
      variant: "danger",
    };
  }

  if (quantity <= 10) {
    return {
      label: "Running Low",
      variant: "warning",
    };
  }

  return {
    label: "Available",
    variant: "success",
  };
}
