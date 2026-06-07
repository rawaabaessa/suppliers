interface ButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outline" | "social" | "flat";
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  onClick?: () => void;
}
const Button = ({
  children,
  variant = "filled",
  type = "button",
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  const variants = {
    filled: "bg-primary text-white hover:bg-light-green btn-shadow px-12 py-2",
    outline:
      "border border-primary text-primary btn-shadow font-medium hover:bg-primary hover:text-white px-12 py-2",
    social: "border-2 border-white-border input-shadow rounded-xl px-12 py-2",
    flat: "text-light-green hover:underline",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-full
        text-base
        transition-colors
        duration-200
        cursor-pointer
        ${variants[variant]} ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
