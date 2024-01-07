"use client";
import { Button } from "../ui/Button/Button";
import { Review } from "./Review";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export const ReviewsSection = () => {
  return (
    <section className="bg-[#F4F7FB] pt-10 pb-16">
      <div className="container mx-auto">
        <h2 className="text-black15 text-[43px] font-extrabold text-center md:text-left ">
          Отзывы
        </h2>

        <div className="mt-8 px-12 pb-8 relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            slidesPerView={3}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Review image="/review1.png" date="15.02.2023" />
            </SwiperSlide>
            <SwiperSlide>
              <Review image="/review2.png" date="15.02.2023" />
            </SwiperSlide>
            <SwiperSlide>
              <Review image="/review1.png" date="15.02.2023" />
            </SwiperSlide>
            <SwiperSlide>
              <Review image="/review1.png" date="15.02.2023" />
            </SwiperSlide>
          </Swiper>
          <div className="custom-prev flex justify-center items-center top-1/2 left-0 md:left-[-30px] md z-10 cursor-pointer">
            <svg
              width="12"
              height="21"
              viewBox="0 0 12 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.041 0.554442L1.03916 9.78904C0.881053 9.95124 0.792568 10.1688 0.792568 10.3953C0.792568 10.6218 0.881053 10.8394 1.03916 11.0016L10.041 20.2396C10.1146 20.3153 10.2027 20.3754 10.2999 20.4164C10.3972 20.4575 10.5017 20.4786 10.6073 20.4786C10.7129 20.4786 10.8174 20.4575 10.9146 20.4164C11.0119 20.3754 11.0999 20.3153 11.1736 20.2396C11.3251 20.0845 11.4099 19.8763 11.4099 19.6594C11.4099 19.4426 11.3251 19.2344 11.1736 19.0792L2.70854 10.3953L11.1736 1.71311C11.3246 1.55807 11.4091 1.3502 11.4091 1.13378C11.4091 0.917354 11.3246 0.709485 11.1736 0.554442C11.0999 0.478801 11.0119 0.418681 10.9146 0.37763C10.8174 0.336579 10.7129 0.31543 10.6073 0.31543C10.5017 0.31543 10.3972 0.336579 10.2999 0.37763C10.2027 0.418681 10.1146 0.478801 10.041 0.554442Z"
                fill="#4878B0 "
              />
            </svg>
          </div>
          <div className="custom-next flex justify-center items-center top-1/2 right-0 md:right-[-30px] z-10 cursor-pointer">
            <svg
              width="12"
              height="21"
              viewBox="0 0 12 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.95899 0.554442L10.9608 9.78904C11.1189 9.95124 11.2074 10.1688 11.2074 10.3953C11.2074 10.6218 11.1189 10.8394 10.9608 11.0016L1.95899 20.2396C1.88534 20.3153 1.79729 20.3754 1.70002 20.4164C1.60276 20.4575 1.49826 20.4786 1.39268 20.4786C1.28711 20.4786 1.18261 20.4575 1.08535 20.4164C0.988081 20.3754 0.900027 20.3153 0.82638 20.2396C0.674863 20.0845 0.590037 19.8763 0.590037 19.6594C0.590037 19.4426 0.674863 19.2344 0.82638 19.0792L9.29143 10.3953L0.82638 1.71311C0.675383 1.55807 0.590886 1.3502 0.590886 1.13378C0.590886 0.917354 0.675383 0.709485 0.82638 0.554442C0.900027 0.478801 0.988081 0.418681 1.08535 0.37763C1.18261 0.336579 1.28711 0.31543 1.39268 0.31543C1.49826 0.31543 1.60276 0.336579 1.70002 0.37763C1.79729 0.418681 1.88534 0.478801 1.95899 0.554442Z"
                fill="#4878B0"
              />
            </svg>
          </div>
        </div>

        <div className="pl-12">
          <Button title="Оставить отзыв" />
        </div>
      </div>
    </section>
  );
};
