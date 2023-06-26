import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Clock from "./Clock";

const SwiperPrayer = ({
  swiperRef,
  value,
  setValue,
  activePrayer,
  prayerTime,
}) => {
  const prayers = [
    {
      id: 1,
      name: "Fajr",
      time: prayerTime.data.timings.Fajr,
      bg: "bg-slate-800",
      active: activePrayer === "Fajr",
    },
    {
      id: 2,
      name: "Sunrise",
      time: prayerTime.data.timings.Sunrise,
      bg: "bg-red-500",
      active: activePrayer === "Sunrise",
    },
    {
      id: 3,
      name: "Dhuhr",
      time: prayerTime.data.timings.Dhuhr,
      bg: "bg-blue-500",
    },
    {
      id: 4,
      name: "Asr",
      time: prayerTime.data.timings.Asr,
      bg: "bg-orange-500",
      active: activePrayer === "Asr",
    },
    {
      id: 5,
      name: "Maghrib",
      time: prayerTime.data.timings.Maghrib,
      bg: "bg-blue-900",
      active: false,
    },
    {
      id: 6,
      name: "Isha",
      time: prayerTime.data.timings.Isha,
      bg: "bg-black",
      active: false,
    },
  ];
  return (
    <div className="flex h-full  w-full items-center justify-between  ">
      <Swiper
        ref={swiperRef}
        initialSlide={1}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 65,
          stretch: 0,
          depth: 140,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        navigation={false}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-full w-screen lg:w-[940px]  "
      >
        {prayers.map((prayerSlide) => (
          <SwiperSlide
            style={{
              width: "320px",
              height: "410px",
            }}
            key={prayerSlide.id}
          >
            <div
              className={`${
                prayerSlide.active && " border-8 border-green-500"
              } flex h-full w-full  flex-col items-center justify-around rounded-xl ${
                prayerSlide.bg
              } text-white`}
            >
              <div className="space-x-2 text-4xl font-black tracking-widest">
                <Clock value={value} setValue={setValue} />
              </div>
              <div className=" font-bold">
                <p className="text-2xl">{prayerSlide.name}</p>{" "}
                <p className="text-xl"> {prayerSlide.time}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperPrayer;
