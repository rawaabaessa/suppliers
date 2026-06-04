import LoginForm from "../../components/forms/LoginForm";
import AuthLayout from "../../layouts/AuthLayout";
import { sidePanelData } from "../../data/sidePanelData";

const Login = () => {
  return (
    <AuthLayout
      title={sidePanelData.title}
      description={sidePanelData.description}
      features={sidePanelData.features}
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
