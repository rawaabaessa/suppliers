type Props = {
  label: string;
  variant: "success" | "warning" | "danger";
};

const Badge = ({ label, variant }: Props) => {
  const styles = {
    success: "bg-light-success text-success",
    warning: "bg-light-warning text-warning",
    danger: "bg-light-cancel text-cancel",
  };

  return (
    <span className={`${styles[variant]} px-3 py-1 rounded-full text-sm`}>
      {label}
    </span>
  );
};

export default Badge;
