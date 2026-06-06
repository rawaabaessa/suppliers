interface ButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outline" | "social";
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
    filled: "bg-primary text-white hover:bg-light-green btn-shadow",
    outline:
      "border border-primary text-primary btn-shadow font-medium hover:bg-primary hover:text-white",
    social: "border-2 border-white-border input-shadow rounded-xl p-2",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={` px-6 py-2
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
