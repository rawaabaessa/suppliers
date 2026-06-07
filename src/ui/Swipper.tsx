import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronRight } from "lucide-react";

interface SwipperProps<T> {
  data: [];
  breakpoints: object;
  renderItem: (item: T) => React.ReactNode;
}

const Swipper = ({ data, breakpoints, renderItem }: SwipperProps<T>) => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        onClick={() => swiper.slideNext()}
        aria-label="btn"
        className="next-btn absolute -right-4 top-1/2 -translate-y-1/2 flex items-center justify-center bg-next-bg text-primary font-bold text-lg w-10 h-10 rounded-full cursor-pointer z-20"
      >
        <ChevronRight className="ml-0.5" />
      </button>
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: ".next-btn",
        }}
        spaceBetween={24}
        breakpoints={breakpoints}
      >
        {data.map((item: object, index: number) => {
          return <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Swipper;
