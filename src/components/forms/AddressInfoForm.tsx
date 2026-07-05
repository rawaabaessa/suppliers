import Button from "../../ui/Button";
import Input from "../../ui/Input";
import ProgressBar from "../../ui/ProgressBar";
import SelectList from "../../ui/SelectList";
import FormContainer from "../auth/FormContainer";
import SuppliersHeader from "../auth/suppliers/SuppliersHeader";
import { locations } from "../../data/locationData";
import type { SelectOption } from "../../types/SelectOption";
import { registrationSteps } from "../../data/registrationSteps";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddressSchema, type AddressFormData } from "../../schema";
import type { SingleValue } from "react-select";
import { useNavigate } from "react-router-dom";
import { useFarmerSignup } from "../../contexts/useFarmerSignup";
import StepGuard from "../auth/suppliers/StepGuard";
import BtnSpinner from "../BtnSpinner";
import ErrorMessage from "../ErrorMessage";

const AddressInfoForm = () => {
  const navigate = useNavigate();
  const { updateFormData } = useFarmerSignup();

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddressFormData>({
    resolver: zodResolver(AddressSchema),
    mode: "onChange",
  });

  const selectedCity = watch("city");

  const cityOptions = Object.keys(locations).map((city) => ({
    value: city,
    label: city,
  }));

  const districtOptions = selectedCity
    ? locations[selectedCity as keyof typeof locations]
    : [];

  const onSubmit = (data: AddressFormData) => {
    console.log("ADDRESS DATA:", data);
    updateFormData({
      city: data.city,
      neighborhood: data.district,
      street: data.street,
    });
    navigate("/signup/supplier/step-4");
  };

  return (
    <StepGuard requiredStep={3}>
      <FormContainer>
        <SuppliersHeader />
        <ProgressBar steps={registrationSteps} currentStep={3} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            {/* CITY */}
            <SelectList
              options={cityOptions}
              title="City"
              placeholder="Select City"
              onChange={(city: SingleValue<SelectOption>) => {
                if (!city) return;

                setValue("city", city.value, {
                  shouldValidate: true,
                  shouldDirty: true,
                });

                setValue("district", "");
              }}
            />

            {errors.city && <ErrorMessage message={`${errors.city.message}`} />}

            {/* DISTRICT */}
            <SelectList
              options={districtOptions}
              title="Neighborhood"
              placeholder="Select Neighborhood"
              onChange={(district: SingleValue<SelectOption>) => {
                if (!district) return;

                setValue("district", district.value, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
            />

            {errors.district && (
              <ErrorMessage message={`${errors.district.message}`} />
            )}

            {/* STREET */}
            <Input
              label="Street"
              placeholder="Enter your street"
              {...register("street")}
            />

            {errors.street && (
              <ErrorMessage message={`${errors.street.message}`} />
            )}
          </div>

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

export default AddressInfoForm;
