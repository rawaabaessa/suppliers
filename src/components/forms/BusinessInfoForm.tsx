import Button from "../../ui/Button";
import Input from "../../ui/Input";
import ProgressBar from "../../ui/ProgressBar";
// import Stepper from "../../ui/stepper";
import FormContainer from "../auth/FormContainer";
import SuppliersHeader from "../auth/suppliers/SuppliersHeader";
import TermsAndPolicy from "../auth/TermsAndPolicy";

const BusinessInfoForm = () => {
  return (
    <FormContainer>
      <SuppliersHeader />
      {/* <Stepper currentStep={2} /> */}
      <ProgressBar />

      <form>
        <Input label="Name" placeholder="Enter your business name" />
        <Input label="Email" placeholder="Enter your business email" />
        <Input label="Phone Number" placeholder="Enter your phone number" />
        <Input label="Password" placeholder="Enter your password" isPassword />
      </form>
      <TermsAndPolicy />
      <Button variant="filled" fullWidth>
        Next
      </Button>
    </FormContainer>
  );
};

export default BusinessInfoForm;
