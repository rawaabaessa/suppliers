import FormContainer from "../auth/FormContainer";
import SuppliersHeader from "../auth/suppliers/SuppliersHeader";
import ProgressBar from "../../ui/ProgressBar";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { registrationSteps } from "../../data/registrationSteps";
import { useNavigate } from "react-router-dom";
import { useFarmerSignup } from "../../contexts/useFarmerSignup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepGuard from "../auth/suppliers/StepGuard";
import BtnSpinner from "../BtnSpinner";
import ErrorMessage from "../ErrorMessage";
import { FarmerBankSchema, type FarmerBankFormData } from "../../schema";
import { farmersignupRequest } from "../../services/authService";
import type { FarmerSignupData } from "../../types/FarmerSignupData";
import { useState } from "react";
import axios from "axios";

const BankDetailsForm = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFarmerSignup();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FarmerBankFormData>({
    resolver: zodResolver(FarmerBankSchema),
    mode: "onChange",
    defaultValues: {
      bankName: formData.bankName,
      accountHolderName: formData.accountHolderName,
      iban: formData.iban,
    },
  });
  const onSubmit: SubmitHandler<FarmerBankFormData> = async (data) => {
    const updatedData = {
      ...formData,
      bankName: data.bankName,
      accountHolderName: data.accountHolderName,
      iban: data.iban,
    };

    updateFormData({
      bankName: data.bankName,
      accountHolderName: data.accountHolderName,
      iban: data.iban,
    });

    try {
      const response = await farmersignupRequest(
        updatedData as FarmerSignupData,
      );
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setServerError(error.response?.data?.message ?? "Something went wrong");
      }
    }
    navigate("/account-pending");
  };

  return (
    <StepGuard requiredStep={4}>
      <FormContainer>
        <SuppliersHeader />
        <ProgressBar steps={registrationSteps} currentStep={4} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Bank name"
            placeholder="Enter your bank name"
            {...register("bankName")}
          />
          {errors.bankName && (
            <ErrorMessage message={`${errors.bankName?.message}`} />
          )}
          <Input
            label="Account holder name"
            placeholder="Enter your account holder name"
            {...register("accountHolderName")}
          />
          {errors.accountHolderName && (
            <ErrorMessage message={`${errors.accountHolderName?.message}`} />
          )}
          <Input
            label="IBAN"
            placeholder="Enter your IBAN"
            {...register("iban")}
          />
          {errors.iban && <ErrorMessage message={`${errors.iban?.message}`} />}
          {serverError && <ErrorMessage message={`${serverError}`} />}
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

export default BankDetailsForm;
