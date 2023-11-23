import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Partners = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div>
          <h2 className="title text-center mb-4">Our Partners</h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[50px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            perferendis quas veniam, debitis soluta inventore! Ducimus laborum
            optio expedita, nesciunt voluptates voluptatem.
          </p>
        </div>

        <Swiper>
          <SwiperSlide>
            <div>
              <div>
                <img src="/avatars/avatar1.jpg" alt="partner-logo" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
