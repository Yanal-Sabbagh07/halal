import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Clock from "./Clock";
import AzahnPlayer from "./AzahnPlayer";

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
      bg: "bg-slate-800 text-slate-100",
      active: activePrayer === "Fajr",
    },
    {
      id: 2,
      name: "Sunrise",
      time: prayerTime.data.timings.Sunrise,
      bg: "bg-yellow-300 text-slate-700",
      active: activePrayer === "Sunrise",
    },
    {
      id: 3,
      name: "Dhuhr",
      time: prayerTime.data.timings.Dhuhr,
      bg: "bg-blue-600 text-slate-100",
      active: activePrayer === "Dhuhr",
    },
    {
      id: 4,
      name: "Asr",
      time: prayerTime.data.timings.Asr,
      bg: "bg-orange-500 text-slate-100",
      active: activePrayer === "Asr",
    },
    {
      id: 5,
      name: "Maghrib",
      time: prayerTime.data.timings.Maghrib,
      bg: "bg-blue-900 text-slate-100",
      active: activePrayer === "Maghrib",
    },
    {
      id: 6,
      name: "Isha",
      time: prayerTime.data.timings.Isha,
      bg: "bg-black text-slate-100",
      active: activePrayer === "Isha",
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
            key={prayerSlide.id}
            className="!h-[400px] !w-[90%] sm:!w-[320px]"
          >
            <div
              className={`${
                prayerSlide.active && " border-4 border-green-500"
              } flex h-full w-full  flex-col items-center justify-between rounded-xl  ${
                prayerSlide.bg
              }`}
            >
              <div className="mt-4 text-4xl font-black tracking-widest">
                <Clock value={value} setValue={setValue} />
              </div>

              <div className="mb-4 text-2xl font-bold">
                <p className=" tracking-wider">{prayerSlide.name}</p>{" "}
                <p className=" tracking-widest"> {prayerSlide.time}</p>
              </div>

              {prayerSlide.active && <AzahnPlayer />}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperPrayer;
