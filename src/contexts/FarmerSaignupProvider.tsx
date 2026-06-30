import { useState } from "react";
import type { FarmerSignupData } from "../types/FarmerSignupData";
import { FarmerSignupContext } from "./FarmerSignupContext";

export const FarmerSignupProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formData, setFormData] = useState<Partial<FarmerSignupData>>({});

  const updateFormData = (data: Partial<FarmerSignupData>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <FarmerSignupContext.Provider
      value={{
        formData,
        updateFormData,
      }}
    >
      {children}
    </FarmerSignupContext.Provider>
  );
};
