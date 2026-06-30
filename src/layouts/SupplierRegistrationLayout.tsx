import AuthLayout from "./AuthLayout";
import { supplierRegistrationSidePanelData } from "../data/sidePanelData";
import { Outlet } from "react-router-dom";
import { FarmerSignupProvider } from "../contexts/FarmerSaignupProvider";

const SupplierRegistrationLayout = () => {
  return (
    <FarmerSignupProvider>
      <AuthLayout
        title={supplierRegistrationSidePanelData.title}
        description={supplierRegistrationSidePanelData.description}
        features={supplierRegistrationSidePanelData.features}
      >
        <Outlet />
      </AuthLayout>
    </FarmerSignupProvider>
  );
};

export default SupplierRegistrationLayout;
