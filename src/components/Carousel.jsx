import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay:3000,
          disableOnInteraction:false
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="slide" // Set the slide effect for smooth transitions
        speed={2000} 
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://mcdonalds.com.pk/wp-content/uploads/2024/01/Beef-W.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mcdonalds.com.pk/wp-content/uploads/2024/01/treat-miss_slider-Desktop1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mcdonalds.com.pk/wp-content/uploads/2023/12/SnackSip_Desktop-Slider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mcdonalds.com.pk/wp-content/uploads/2024/01/Chicken-Mac-W.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mcdonalds.com.pk/wp-content/uploads/2024/01/Fillet-Fish-W.png" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
