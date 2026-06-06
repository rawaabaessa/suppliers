import FormContainer from "../auth/FormContainer";
import SuppliersHeader from "../auth/suppliers/SuppliersHeader";
import ProgressBar from "../../ui/ProgressBar";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { registrationSteps } from "../../data/registrationSteps";

const BankDetailsForm = () => {
  return (
    <FormContainer>
      <SuppliersHeader />
      <ProgressBar steps={registrationSteps} currentStep={4} />

      <form>
        <Input label="Bank name" placeholder="Enter your bank name" />
        <Input
          label="Account holder name"
          placeholder="Enter your account holder name"
        />
        <Input label="IBAN" placeholder="Enter your IBAN" />
      </form>
      <Button variant="filled" fullWidth>
        Next
      </Button>
    </FormContainer>
  );
};

export default BankDetailsForm;
