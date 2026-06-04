import AuthLayout from "./AuthLayout";
import { supplierRegistrationSidePanelData } from "../data/sidePanelData";
import { Outlet } from "react-router-dom";

const SupplierRegistrationLayout = () => {
  return (
    <AuthLayout
      title={supplierRegistrationSidePanelData.title}
      description={supplierRegistrationSidePanelData.description}
      features={supplierRegistrationSidePanelData.features}
    >
      <Outlet />
    </AuthLayout>
  );
};

export default SupplierRegistrationLayout;
