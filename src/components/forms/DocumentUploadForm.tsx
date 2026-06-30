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
    console.log(formData);
    navigate("/signup/supplier/step-3");
  };

  return (
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
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Next</span>
            </div>
          ) : (
            "Next"
          )}
        </Button>
      </form>
    </FormContainer>
  );
};

export default DocumentUploadForm;
