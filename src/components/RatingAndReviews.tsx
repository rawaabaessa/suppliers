import { Star } from "lucide-react";

const RatingAndReviews = ({
  rating,
  reviewsCount,
}: {
  rating: number;
  reviewsCount: number;
}) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xxs md:text-sm text-gray-green/80">{rating}.0</span>
      <Star className="text-amber-300" size={15} fill="currentColor" />
      <span className="text-xxs md:text-sm text-gray-green/80">
        ({reviewsCount})
      </span>
    </div>
  );
};

export default RatingAndReviews;
