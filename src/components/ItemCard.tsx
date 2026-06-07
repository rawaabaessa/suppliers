import { MapPin, Star } from "lucide-react";
import type { Product } from "../types/Product";
import farmLogo from "../assets/farmlogo.svg";

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
      <div className="px-6 py-3">
        <h4 className="text-light-green font-semibold text-base md:text-xl mb-2">
          {name}
        </h4>
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-amber-200">
            <img src={farmLogo} alt="k" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-light-green text-xs md:text-base">
              {farmName}
            </span>
            <div className="flex items-center gap-1 text-gray-green">
              <MapPin size={12} />
              <span className="capitalize text-xs md:text-sm font-semibold">
                {location}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xxs md:text-sm text-gray-green/80">
                {rating}.0
              </span>
              <Star className="text-amber-300" size={15} fill="currentColor" />
              <span className="text-xxs md:text-sm text-gray-green/80">
                ({reviewsCount})
              </span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="font-semibold text-xl md:text-2.5xl inline">
              {formatPrice(price)}
            </p>
            <span className="text-xxs md:text-sm text-gray-green/80 ml-1">
              ({unit})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
