import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import ProgressBar from "../../ui/ProgressBar";
import SelectList from "../../ui/SelectList";
import FormContainer from "../auth/FormContainer";
import SuppliersHeader from "../auth/suppliers/SuppliersHeader";
import { locations } from "../../data/locationData";
import type { SelectOption } from "../../types/SelectOption";
import { registrationSteps } from "../../data/registrationSteps";

const AddressInfoForm = () => {
  const [selectedCity, setSelectedCity] = useState<SelectOption | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<SelectOption | null>(
    null,
  ); // الحي

  const cityOptions = Object.keys(locations).map((city) => ({
    value: city,
    label: city,
  }));

  const districtOptions = selectedCity
    ? locations[selectedCity.value as keyof typeof locations]
    : [];

  return (
    <FormContainer>
      <SuppliersHeader />
      <ProgressBar steps={registrationSteps} currentStep={3} />
      <form>
        <div className="flex flex-col gap-4">
          <SelectList
            options={cityOptions}
            title="City"
            placeholder="Select City"
            onChange={(city) => {
              setSelectedCity(city);
              setSelectedDistrict(null);
            }}
          />
          <SelectList
            options={districtOptions}
            title="Neighborhood"
            placeholder="Select Neighborhood "
            onChange={(neighborhood) => setSelectedDistrict(neighborhood)}
          />
          <Input label="Street" placeholder="Enter your street" />
        </div>
      </form>
      <Button variant="filled" fullWidth>
        Next
      </Button>
    </FormContainer>
  );
};

export default AddressInfoForm;
