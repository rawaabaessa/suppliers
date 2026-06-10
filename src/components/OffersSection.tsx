import Container from "../ui/Container";
import Heading from "./Heading";
import { ChevronRight } from "lucide-react";
import OfferCard from "./OfferCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { offersData } from "../data/offersData";

const OffersSection = () => {
  const swiper = useSwiper();
  return (
    <section>
      <Container>
        <div className="flex items-center justify-between mb-5">
          <Heading>Todays Offers</Heading>
        </div>
        <div className="relative">
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
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {offersData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <OfferCard
                    title={item.title}
                    offer={item.offer}
                    img={item.img}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default OffersSection;
