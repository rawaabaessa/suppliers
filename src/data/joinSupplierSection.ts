import { Bell, Package, Store, Truck, UserRoundPlus } from "lucide-react";
import img1 from "../assets/suppliersSteps/1.svg";
import img2 from "../assets/suppliersSteps/2.svg";
import img3 from "../assets/suppliersSteps/3.svg";
import img4 from "../assets/suppliersSteps/4.svg";
import img5 from "../assets/suppliersSteps/5.svg";

export const joinSupplierSteps = [
  {
    title: "Create Your Account",
    description: "Sign up in minutes and create your supplier profile.",
    icon: UserRoundPlus,
    img: img1,
  },
  {
    title: "List Your Products",
    description: "Add your farm products and set your prices and availability.",
    icon: Store,
    img: img2,
  },
  {
    title: "Get Orders",
    description:
      "Receive real-time orders from nearby restaurants and businesses.",
    icon: Bell,
    img: img3,
  },
  {
    title: "Prepare & Pack",
    description:
      "Prepare your products with care and get them ready for delivery.",
    icon: Package,
    img: img4,
  },
  {
    title: "Deliver & Grow",
    description:
      "Deliver on time, build strong relationships, and grow your business.",
    icon: Truck,
    img: img5,
  },
];
