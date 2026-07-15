import iconWarning from "../../assets/dashboard/icons/Vector (8).svg";
import iconSuccess from "../../assets/dashboard/icons/solar_box-linear (1).svg";
import iconCancel from "../../assets/dashboard/icons/hugeicons_package-out-of-stock.svg";
import iconCarrot from "../../assets/dashboard/icons/icon-park_carrot.svg";

type CardVariant = "success" | "warning" | "danger" | "info";

type TableCardProps = {
  title: string;
  quantity: number;
  variant: CardVariant;
};

const variants = {
  success: {
    bg: "bg-light-success",
    icon: iconSuccess,
  },

  warning: {
    bg: "bg-light-pending",
    icon: iconWarning,
  },

  danger: {
    bg: "bg-light-cancel",
    icon: iconCancel,
  },

  info: {
    bg: "bg-light-info",
    icon: iconCarrot,
  },
};

const TableCard = ({ title, quantity, variant }: TableCardProps) => {
  return (
    <div className="flex items-center gap-2 bg-white-100 input-shadow p-4 rounded-3xl">
      <div
        className={`flex items-center justify-center w-10 h-10 lg:w-15 lg:h-15 rounded-full ${variants[variant].bg}`}
      >
        <img src={variants[variant].icon} className="w-5 lg:w-6" alt="icon" />
      </div>
      <div className="flex flex-col gap-1 items-start">
        <span className="text-xs md:text-sm text-light-black/70">{title}</span>
        <span className="text-16 md:text-2xl">{quantity}</span>
      </div>
    </div>
  );
};

export default TableCard;
