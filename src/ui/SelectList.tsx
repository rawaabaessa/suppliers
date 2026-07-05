import Select from "react-select";
import type { Props } from "react-select";
import Label from "./Label";
import type { SelectOption } from "../types/SelectOption";

interface SelectListProps extends Props<SelectOption, false> {
  title: string;
}

const SelectList = ({ title, ...props }: SelectListProps) => {
  return (
    <div>
      <Label title={title} />
      <Select
        {...props}
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: "12px",
            borderColor: "#dadfe3",
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
          }),
        }}
      />
    </div>
  );
};

export default SelectList;
