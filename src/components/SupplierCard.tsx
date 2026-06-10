import Location from "./Location";
import RatingAndReviews from "./RatingAndReviews";
import Button from "../ui/Button";
import farmlogo from "../assets/farmlogo.svg";
import type { Supplier } from "../types/Supplier";

interface SupplierCardProps {
  supplier: Supplier;
  onClick?: (id: string) => void;
}

const SupplierCard = ({ supplier, onClick }: SupplierCardProps) => {
  return (
    <div className="input-shadow  rounded-2xl">
      {/* card */}
      <div className="bg-green-50 rounded-bl-full rounded-br-full aspect-[2/1] input-shadow">
        <div className="bg-white flex justify-center rounded-bl-full rounded-br-full p-5 aspect-[2/1]">
          <img src={farmlogo} alt="logo" />
        </div>
        <div className="flex flex-col items-center gap-1 p-3">
          <h3 className="capitalize text-gray-green text-xxs md:text-16 font-normal md:font-semibold">
            {supplier.name}
          </h3>
          <Location opacity={80} title={supplier.location} />
          <RatingAndReviews
            rating={supplier.rating}
            reviewsCount={supplier.reviewsCount}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-3">
        <Button variant="outline" size="sm">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default SupplierCard;
