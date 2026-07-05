import { useNavigate } from "react-router-dom";
import { registrationSteps } from "../../data/registrationSteps";
import Button from "../../ui/Button";
import ProgressBar from "../../ui/ProgressBar";
import FormContainer from "../auth/FormContainer";
import SuppliersHeader from "../auth/suppliers/SuppliersHeader";
import { useFarmerSignup } from "../../contexts/useFarmerSignup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FarmDocumentsSchema, type FarmDocumetsFormData } from "../../schema";
import ErrorMessage from "../ErrorMessage";
import FileUpload from "../auth/FileUpload";
import StepGuard from "../auth/suppliers/StepGuard";
import BtnSpinner from "../BtnSpinner";

const DocumentUploadForm = () => {
  const navigate = useNavigate();
  const { updateFormData, formData } = useFarmerSignup();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FarmDocumetsFormData>({
    resolver: zodResolver(FarmDocumentsSchema),
    mode: "onChange",
    defaultValues: {
      identityFile: formData.identity_file,
      licenseFile: formData.license_file,
    },
  });

  const onSubmit: SubmitHandler<FarmDocumetsFormData> = (data) => {
    updateFormData({
      identity_file: data.identityFile,
      license_file: data.licenseFile,
    });
    navigate("/signup/supplier/step-3");
  };

  return (
    <StepGuard requiredStep={2}>
      <FormContainer>
        <SuppliersHeader />
        <ProgressBar steps={registrationSteps} currentStep={2} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 mb-5">
            <FileUpload
              label="Personal identity"
              name="identityFile"
              register={register}
              setValue={setValue}
              watch={watch}
            />

            {errors.identityFile && (
              <ErrorMessage message={errors.identityFile.message as string} />
            )}

            <FileUpload
              label="Commercial license"
              name="licenseFile"
              register={register}
              setValue={setValue}
              watch={watch}
            />

            {errors.licenseFile && (
              <ErrorMessage message={errors.licenseFile.message as string} />
            )}
          </div>
          <Button
            variant="filled"
            type="submit"
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? <BtnSpinner /> : "Next"}
          </Button>
        </form>
      </FormContainer>
    </StepGuard>
  );
};

export default DocumentUploadForm;
