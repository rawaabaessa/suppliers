import { registrationSteps } from "../../data/registrationSteps";
import Button from "../../ui/Button";
import ProgressBar from "../../ui/ProgressBar";
import FormContainer from "../auth/FormContainer";
import SuppliersHeader from "../auth/suppliers/SuppliersHeader";
import UploadBtn from "../auth/suppliers/UploadBtn";

const DocumentUploadForm = () => {
  return (
    <FormContainer>
      <SuppliersHeader />
      <ProgressBar steps={registrationSteps} currentStep={2} />
      <form>
        <div className="flex flex-col gap-4">
          <UploadBtn title="Personal identity" />
          <UploadBtn title="Commercial license" />
        </div>
      </form>
      <Button variant="filled" fullWidth>
        Next
      </Button>
    </FormContainer>
  );
};

export default DocumentUploadForm;
