import { useContext } from "react";
import { FarmerSignupContext } from "./FarmerSignupContext";

export const useFarmerSignup = () => {
  const context = useContext(FarmerSignupContext);

  if (!context) {
    throw new Error("useFarmerSignup must be used inside FarmerSignupProvider");
  }

  return context;
};
