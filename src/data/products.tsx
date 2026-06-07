import type { Product } from "../types/Product";
import t1 from "../assets/items/t1.svg";
import t2 from "../assets/items/t2.svg";
import t3 from "../assets/items/t3.svg";
import t4 from "../assets/items/t4.svg";

export const bestSellers: Product[] = [
  {
    id: 1,
    name: "Fresh Zucchini",
    farmName: "Al-Qassem Farm",
    location: "Dammam",
    image: t1,
    price: 5,
    unit: "5kg",
    rating: 4.0,
    reviewsCount: 3,
    badge: "Today's Harvest",
  },
  {
    id: 2,
    name: "Green Bell Pepper",
    farmName: "Al-Amal Farm",
    location: "Jeddah",
    image: t2,
    price: 8,
    unit: "5kg",
    rating: 4.0,
    reviewsCount: 3,
  },
  {
    id: 3,
    name: "Red Onion",
    farmName: "Al-Morooj Farm",
    location: "Jazan",
    image: t3,
    price: 2,
    unit: "5kg",
    rating: 4.0,
    reviewsCount: 3,
  },
  {
    id: 4,
    name: "Carrot",
    farmName: "Al-Bahah Farm",
    location: "Al-Bahah",
    image: t4,
    price: 6,
    unit: "5kg",
    rating: 4.0,
    reviewsCount: 3,
    badge: "Today's Harvest",
  },
];
