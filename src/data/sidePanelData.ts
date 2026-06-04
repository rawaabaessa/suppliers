import type { Feature } from "../types/Feature";

interface SidePanelData {
  title: string;
  description: string;
  features: Feature[];
}

export const sidePanelData: SidePanelData = {
  title: "Find Trusted Suppliers In One Place",
  description:
    "Discover high-quality products, connect with reliable suppliers, and manage your orders through one seamless marketplace experience.",
  features: [
    {
      title: "Verified Suppliers",
      description:
        "Work with trusted suppliers and explore a wide range of products.",
    },
    {
      title: "Fast & Easy Ordering",
      description: "Place orders smoothly and track everything in realtime.",
    },
    {
      title: "Smart Business Experience",
      description:
        "Manage purchases, deliveries, and supplier communication effortlessly.",
    },
  ],
};

export const supplierRegistrationSidePanelData: SidePanelData = {
  title: "Reach More Customers Sell Smarter.",
  description:
    "Join a growing network of suppliers and take control of your business with powerful tools and insights.",
  features: [
    {
      title: "Smart Order Management",
      description: "Track and manage supplier orders with ease.",
    },
    {
      title: "Real-Time Insights",
      description: "Monitor sales, activity, and performance instantly.",
    },
    {
      title: "Reach More Buyers",
      description: "Connect with businesses actively looking for products.",
    },
  ],
};
