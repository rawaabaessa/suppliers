import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../../components/dashboard/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronRight } from "lucide-react";
import { useProducts } from "../../hooks/useProducts";

const ProductSwiper = () => {
  const swiper = useSwiper();
  const { data } = useProducts();

  return (
    <div className="relative mt-10">
      <button
        onClick={() => swiper.slideNext()}
        aria-label="btn"
        className="next-btn absolute -right-4 top-1/2 -translate-y-1/2 flex items-center justify-center bg-green-50 text-primary font-bold text-lg w-10 h-10 rounded-full cursor-pointer z-20"
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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ProductCard product={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
