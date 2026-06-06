import Select from "react-select";
import Label from "./Label";

const SelectList = ({ option, title }: { option: string[]; title: string }) => {
  return (
    <div>
      <Label title={title} />
      <Select options={option} />
    </div>
  );
};

export default SelectList;
