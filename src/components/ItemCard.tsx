import type { Product } from "../types/Product";
import farmLogo from "../assets/farmlogo.svg";
import RatingAndReviews from "./RatingAndReviews";
import Location from "./Location";
import { ShoppingCart } from "lucide-react";

const ItemCard = ({
  name,
  farmName,
  image,
  location,
  rating,
  reviewsCount,
  price,
  unit,
  badge,
}: Product) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className="input-shadow w-full rounded-2xl">
      <div className="relative overflow-hidden rounded-t-2xl">
        <img src={image} alt={name} className="w-full aspect-[380/178]" />
        {badge && (
          <div className="text-white absolute top-2 left-2 bg-light-green px-3 py-1 rounded-2xl text-xs md:text-[16px]">
            {badge}
          </div>
        )}
      </div>
      <div className="px-6 py-3 flex flex-col gap-3">
        <h4 className="text-light-green font-semibold text-base md:text-xl">
          {name}
        </h4>
        <div className="flex gap-3">
          <div className="w-5 h-5 rounded-full bg-amber-200">
            <img src={farmLogo} alt="k" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-light-green text-xs md:text-base">
              {farmName}
            </span>
            <Location opacity={100} title={location} />
            <RatingAndReviews rating={rating} reviewsCount={reviewsCount} />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="font-semibold text-xl md:text-26 inline">
              {formatPrice(price)}
            </p>
            <span className="text-xxs md:text-sm text-gray-green/80 ml-1">
              ({unit})
            </span>
          </div>
          <button
            aria-label="btn"
            className="w-10 h-10 rounded-full green-shadow flex items-center justify-center"
          >
            <ShoppingCart size={20} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
