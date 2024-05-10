
import {
    Navigation,
    Pagination,
    A11y,
    Autoplay,
    EffectFade
  } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/swiper-bundle.css";


const Banner = () => {
    return (
        <div>
                        <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
      >
      
      
        <SwiperSlide >
         <div className="h-80 w-full rounded-2xl bg-no-repeat bg-cover " style={{backgroundImage: 'url(https://i.ibb.co/3WP6xKd/clay-2.jpg)'}}>
         <div className="text-white">
            <h1>Graphic Deaign</h1>
            
         </div>
         </div>
        </SwiperSlide>
        <SwiperSlide >
         <div className="h-80 w-full rounded-2xl bg-cover flex items-center justify-center" style={{backgroundImage: 'url(https://i.ibb.co/tLf6k6k/lion.jpg)'}}>
         <div className="text-white">
            <h1>Graphic Deaign</h1>
            
         </div>
         </div>
        </SwiperSlide>
        <SwiperSlide >
         <div className="h-80 w-full rounded-2xl bg-cover flex items-center justify-center" style={{backgroundImage: 'url(https://i.ibb.co/FYfjC90/chocolate.jpg)'}}>
         <div className="text-white">
            <h1>Graphic Deaign</h1>
            
         </div>
         </div>
        </SwiperSlide>
        <SwiperSlide >
         <div className="h-80 w-full rounded-2xl bg-cover flex items-center justify-center" style={{backgroundImage: 'url(https://i.ibb.co/48QTk4j/stone-wood.jpg)'}}>
         <div className="text-white">
            <h1>Graphic Deaign</h1>
            
         </div>
         </div>
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Banner;