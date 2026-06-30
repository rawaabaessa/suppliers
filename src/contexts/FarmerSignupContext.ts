import { createContext } from "react";
import type { FarmerSignupData } from "../types/FarmerSignupData";

type FarmerSignupContextValue = {
  formData: Partial<FarmerSignupData>;
  updateFormData: (data: Partial<FarmerSignupData>) => void;
};

export const FarmerSignupContext = createContext<
  FarmerSignupContextValue | undefined
>(undefined);
