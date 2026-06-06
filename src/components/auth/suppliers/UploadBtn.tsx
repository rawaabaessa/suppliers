import Label from "../../../ui/Label";
import FileUpload from "../../FileUpload";

const UploadBtn = ({ title }: { title: string }) => {
  return (
    <div>
      <Label title={title} />
      <FileUpload />
    </div>
  );
};

export default UploadBtn;
