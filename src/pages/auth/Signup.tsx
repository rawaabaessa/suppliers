import AuthLayout from "../../layouts/AuthLayout";
import SignupForm from "../../components/forms/SignupForm";
import { sidePanelData } from "../../data/sidePanelData";

const Signup = () => {
  return (
    <AuthLayout
      title={sidePanelData.title}
      description={sidePanelData.description}
      features={sidePanelData.features}
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
