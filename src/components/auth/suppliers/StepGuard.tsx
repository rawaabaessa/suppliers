import { Navigate } from "react-router-dom";
import { useFarmerSignup } from "../../../contexts/useFarmerSignup";

type StepGuardProps = {
  children: React.ReactNode;
  requiredStep: number;
};

const StepGuard = ({ children, requiredStep }: StepGuardProps) => {
  const { formData } = useFarmerSignup();

  const isStep1Complete =
    !!formData.farmName &&
    !!formData.name &&
    !!formData.email &&
    !!formData.phone &&
    !!formData.password;

  const isStep2Complete = !!formData.identity_file && !!formData.license_file;

  const isStep3Complete =
    !!formData.city && !!formData.neighborhood && !!formData.street;

  const isAllowed = () => {
    switch (requiredStep) {
      case 1:
        return true;

      case 2:
        return isStep1Complete;

      case 3:
        return isStep1Complete && isStep2Complete;

      case 4:
        return isStep1Complete && isStep2Complete && isStep3Complete;

      default:
        return false;
    }
  };

  if (!isAllowed()) {
    if (!isStep1Complete) {
      return <Navigate to="/signup/supplier/step-1" replace />;
    }

    if (!isStep2Complete) {
      return <Navigate to="/signup/supplier/step-2" replace />;
    }

    if (!isStep3Complete) {
      return <Navigate to="/signup/supplier/step-3" replace />;
    }

    return <Navigate to="/signup/supplier/step-1" replace />;
  }

  return <>{children}</>;
};

export default StepGuard;
