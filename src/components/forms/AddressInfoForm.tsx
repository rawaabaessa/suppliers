import Button from "../../ui/Button";
import ProgressBar from "../../ui/ProgressBar";
import FormContainer from "../auth/FormContainer";
import SuppliersHeader from "../auth/suppliers/SuppliersHeader";

const ADDRESSES = [];

const AddressInfoForm = () => {
  return (
    <FormContainer>
      <SuppliersHeader />
      <ProgressBar />
      <form>
        <div className="flex flex-col gap-4"></div>
      </form>
      <Button variant="filled" fullWidth>
        Next
      </Button>
    </FormContainer>
  );
};

export default AddressInfoForm;
