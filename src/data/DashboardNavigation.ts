import { BiPackage } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export const NavigationItems = [
  {
    name: "Dashboard",
    icon: MdOutlineDashboard,
    href: "/dashboard/overview",
  },
  {
    name: "Products",
    icon: BiPackage,
    href: "/dashboard/products",
  },
  {
    name: "Orders",
    icon: BiPackage,
    href: "/dashboard/orders",
  },
  {
    name: "Analyitics",
    icon: MdOutlineAnalytics,
    href: "/dashboard/analytics",
  },
  {
    name: "Setting",
    icon: IoSettingsOutline,
    href: "/dashboard/setting",
  },
];
