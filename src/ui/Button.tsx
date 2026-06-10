interface ButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outline" | "social" | "flat";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  onClick?: () => void;
}

const sizes = {
  sm: "px-4 py-1 text-sm",
  md: "px-8 py-2 text-base",
  lg: "px-12 py-3 text-lg",
};

const Button = ({
  children,
  variant = "filled",
  size = "md",
  type = "button",
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  const variants = {
    filled: "bg-primary text-white hover:bg-light-green btn-shadow px-12 py-2",
    outline:
      "border border-primary text-primary btn-shadow font-medium hover:bg-primary hover:text-white",
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
        ${variants[variant]} ${fullWidth ? "w-full" : ""}  ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
