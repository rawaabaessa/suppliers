import { Upload } from "lucide-react";
import { useRef } from "react";
import {
  type FieldValues,
  type Path,
  type UseFormRegister,
  type UseFormSetValue,
  type UseFormWatch,
} from "react-hook-form";

type FileUploadProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  watch: UseFormWatch<T>;
};

const FileUpload = <T extends FieldValues>({
  label,
  name,
  register,
  setValue,
  watch,
}: FileUploadProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const file = watch(name) as File | undefined;

  const { ref, ...rest } = register(name);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setValue(name, selectedFile as T[Path<T>], {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>

      <input
        type="file"
        accept=".pdf,.png,.jpg,.jpeg"
        className="hidden"
        {...rest}
        ref={(element) => {
          ref(element);
          inputRef.current = element;
        }}
        onChange={handleChange}
      />

      <div
        onClick={handleClick}
        className="flex cursor-pointer items-center justify-between rounded-2xl border border-dashed border-light-black p-4 transition hover:border-primary"
      >
        <div>
          <p className="text-sm text-gray-700">
            {file?.name ?? "Click to upload file"}
          </p>

          <span className="text-xs text-gray-400">PDF, PNG, JPG allowed</span>
        </div>

        <Upload size={18} className="text-light-black" />
      </div>
    </div>
  );
};

export default FileUpload;
