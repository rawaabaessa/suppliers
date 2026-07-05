import { registrationSteps } from "../../data/registrationSteps";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import ProgressBar from "../../ui/ProgressBar";
import FormContainer from "../auth/FormContainer";
import SuppliersHeader from "../auth/suppliers/SuppliersHeader";
import TermsAndPolicy from "../auth/TermsAndPolicy";
import { useNavigate } from "react-router-dom";
import { useFarmerSignup } from "../../contexts/useFarmerSignup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../ErrorMessage";
import {
  FarmerBusinessInfoSchema,
  type FarmerBusinessInfoFormData,
} from "../../schema";
import StepGuard from "../auth/suppliers/StepGuard";
import BtnSpinner from "../BtnSpinner";

const BusinessInfoForm = () => {
  const navigate = useNavigate();
  const { updateFormData, formData } = useFarmerSignup();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FarmerBusinessInfoFormData>({
    resolver: zodResolver(FarmerBusinessInfoSchema),
    mode: "onChange",
    defaultValues: {
      farmName: formData.farmName,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
    },
  });

  const onSubmit: SubmitHandler<FarmerBusinessInfoFormData> = (data) => {
    updateFormData({
      name: data.name,
      farmName: data.farmName,
      email: data.email,
      phone: data.phone,
      password: data.password,
    });
    navigate("/signup/supplier/step-2");
  };

  return (
    <StepGuard requiredStep={1}>
      <FormContainer>
        <SuppliersHeader />
        <ProgressBar steps={registrationSteps} currentStep={1} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Name"
            placeholder="Enter your business name"
            {...register("name")}
          />
          {errors.name && <ErrorMessage message={`${errors.name?.message}`} />}
          <Input
            label="Farm Name"
            placeholder="Enter your business name"
            {...register("farmName")}
          />
          {errors.farmName && (
            <ErrorMessage message={`${errors.farmName?.message}`} />
          )}
          <Input
            label="Email"
            placeholder="Enter your business email"
            {...register("email")}
          />
          {errors.email && (
            <ErrorMessage message={`${errors.email?.message}`} />
          )}
          <Input
            label="Phone Number"
            placeholder="Enter your phone number"
            {...register("phone")}
          />
          {errors.phone && (
            <ErrorMessage message={`${errors.phone?.message}`} />
          )}
          <Input
            label="Password"
            placeholder="Enter your password"
            isPassword
            {...register("password")}
          />
          {errors.password && (
            <ErrorMessage message={`${errors.password?.message}`} />
          )}

          <TermsAndPolicy {...register("terms")} />
          {errors.terms && (
            <ErrorMessage message={`${errors.terms?.message}`} />
          )}

          <Button
            variant="filled"
            disabled={isSubmitting}
            type="submit"
            fullWidth
          >
            {isSubmitting ? <BtnSpinner /> : "Next"}
          </Button>
        </form>
      </FormContainer>
    </StepGuard>
  );
};

export default BusinessInfoForm;
