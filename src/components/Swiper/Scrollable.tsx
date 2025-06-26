import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { ScrollableProps } from "./Type";

interface NewScrollableProps {
  data?: ScrollableProps;
}

function Scrollable({ data }: NewScrollableProps) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">DISCOVER MORE FROM THE BBC</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={data?.spaceBetween || 20}
        slidesPerView={data?.slidesPerView || 5}
        centeredSlides={false}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1536: { slidesPerView: 6 },
        }}
        className=""
      >
        {data?.children?.map((child, index) => (
          <SwiperSlide key={index}>
            <div className="w-full max-w-xs">{child}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Scrollable;
