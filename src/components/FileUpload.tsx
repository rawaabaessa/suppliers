import { Upload } from "lucide-react";
import { useRef, useState } from "react";

const FileUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div>
      {/* Hidden input */}
      <input
        type="file"
        ref={fileInputRef}
        aria-label="Upload file"
        className="hidden"
        onChange={handleChange}
      />
      <div
        onClick={handleClick}
        className="flex items-center justify-between w-full border border-dashed border-light-black hover:border-primary rounded-2xl cursor-pointer p-3"
      >
        <p className="text-gray-600 text-xs">
          {fileName ? fileName : "Click to upload file"}
          <p className="text-xs text-gray-400 mt-1">PDF, PNG, JPG allowed</p>
        </p>
        <Upload className="text-light-black" size={18} />
      </div>
    </div>
  );
};

export default FileUpload;
