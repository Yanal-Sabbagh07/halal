"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import SwiperPrayer from "./SwiperPrayer";
import Selector from "./Selector";
import SyncIcon from "@mui/icons-material/Sync";

const PrayerSection = () => {
  const [city, setCity] = useState("");
  const swiperRef: any = useRef(null);
  const baseURL = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=germany&method=3`;
  const [value, setValue] = useState(new Date());
  const [prayerTime, setPrayerTime] = useState<any>(0);
  const [activePrayer, SetActivePrayer] = useState("");
  const [nextPrayer, setNextPrayer] = useState("");
  const [nextPrayerInHours, setNextPrayerInHours] = useState(0);
  const [nextPrayerInMinutes, setNextPrayerInMinutes] = useState(0);
  const convertTimetoNumber = (time: string | null | undefined) => {
    const currentTimeArray = time.getHours() + ":" + time.getMinutes();
    const number = currentTimeArray.split(":");
    return parseInt(number[0], 10) * 60 + parseInt(number[1], 10);
  };
  const convertPrayerTimeToNumber = (prayerTime: any) => {
    const number = prayerTime.split(":");
    return parseInt(number[0], 10) * 60 + parseInt(number[1], 10);
  };
  const currentTimeInMinutes = convertTimetoNumber(value);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPrayerTime(response.data);
    });
  }, [baseURL]);

  useEffect(() => {
    if (prayerTime) {
      const midNightInMinutes = 24 * 60;
      const fajrTimeInMinutes = convertPrayerTimeToNumber(
        prayerTime.data.timings.Fajr
      );
      const sunTimeInMinutes = convertPrayerTimeToNumber(
        prayerTime.data.timings.Sunrise
      );

      const duhrTimeInMinutes = convertPrayerTimeToNumber(
        prayerTime.data.timings.Dhuhr
      );
      const asrTimeInMinutes = convertPrayerTimeToNumber(
        prayerTime.data.timings.Asr
      );
      const maghrebTimeInMinutes = convertPrayerTimeToNumber(
        prayerTime.data.timings.Maghrib
      );
      const ishaTimeInMinutes = convertPrayerTimeToNumber(
        prayerTime.data.timings.Isha
      );

      if (
        currentTimeInMinutes > fajrTimeInMinutes &&
        currentTimeInMinutes < sunTimeInMinutes
      ) {
        setNextPrayerInHours(
          Math.floor((sunTimeInMinutes - currentTimeInMinutes) / 60)
        );
        setNextPrayerInMinutes((sunTimeInMinutes - currentTimeInMinutes) % 60);
        SetActivePrayer("Fajr");
        swiperRef.current.swiper.slideTo(0);
        setNextPrayer("Sunrise");
      } else if (
        currentTimeInMinutes > sunTimeInMinutes &&
        currentTimeInMinutes < duhrTimeInMinutes
      ) {
        // activePrayer = "Duha";
        setNextPrayerInHours(
          Math.floor((duhrTimeInMinutes - currentTimeInMinutes) / 60)
        );
        setNextPrayerInMinutes((duhrTimeInMinutes - currentTimeInMinutes) % 60);
        SetActivePrayer("Sunrise");
        swiperRef.current.swiper.slideTo(1);
        setNextPrayer("Dhuhr");
      } else if (
        currentTimeInMinutes > duhrTimeInMinutes &&
        currentTimeInMinutes < asrTimeInMinutes
      ) {
        // activePrayer = "Duhr";
        setNextPrayerInHours(
          Math.floor((asrTimeInMinutes - currentTimeInMinutes) / 60)
        );
        setNextPrayerInMinutes((asrTimeInMinutes - currentTimeInMinutes) % 60);
        SetActivePrayer("Dhuhr");
        swiperRef.current.swiper.slideTo(2);
        setNextPrayer("Asr");
      } else if (
        currentTimeInMinutes > asrTimeInMinutes &&
        currentTimeInMinutes < maghrebTimeInMinutes
      ) {
        // activePrayer = "Asr";
        setNextPrayerInHours(
          Math.floor((maghrebTimeInMinutes - currentTimeInMinutes) / 60)
        );
        setNextPrayerInMinutes(
          (maghrebTimeInMinutes - currentTimeInMinutes) % 60
        );
        SetActivePrayer("Asr");
        swiperRef.current.swiper.slideTo(3);
        setNextPrayer("Maghrib");
      } else if (
        currentTimeInMinutes > maghrebTimeInMinutes &&
        currentTimeInMinutes < ishaTimeInMinutes
      ) {
        // activePrayer = "Maghreb";
        setNextPrayerInHours(
          Math.floor((ishaTimeInMinutes - currentTimeInMinutes) / 60)
        );
        setNextPrayerInMinutes((ishaTimeInMinutes - currentTimeInMinutes) % 60);
        SetActivePrayer("Maghrib");
        swiperRef.current.swiper.slideTo(4);
        setNextPrayer("Isha");
      } else if (currentTimeInMinutes > ishaTimeInMinutes) {
        SetActivePrayer("Isha");
        swiperRef.current.swiper.slideTo(5);
        setNextPrayer("Fajr");
        setNextPrayerInHours(
          Math.floor(
            (midNightInMinutes + fajrTimeInMinutes - currentTimeInMinutes) / 60
          )
        );
        setNextPrayerInMinutes(
          (midNightInMinutes + fajrTimeInMinutes - currentTimeInMinutes) % 60
        );
      } else if (currentTimeInMinutes < fajrTimeInMinutes) {
        SetActivePrayer("Isha");
        swiperRef.current.swiper.slideTo(5);
        setNextPrayer("Fajr");
        setNextPrayerInHours(
          Math.floor((fajrTimeInMinutes - currentTimeInMinutes) / 60)
        );
        setNextPrayerInMinutes((fajrTimeInMinutes - currentTimeInMinutes) % 60);
      }
    }
  }, [
    activePrayer,
    nextPrayer,
    nextPrayerInMinutes,
    currentTimeInMinutes,
    prayerTime,
    swiperRef,
    baseURL,
    city,
  ]);
  if (prayerTime)
    return (
      <section id="prayer" className="min-h-screen w-full bg-white">
        <div className="mt-16 flex h-[calc(100vh-64px)] w-full flex-col items-center justify-evenly  text-center">
          <div className="flex w-full items-center justify-center lg:w-[940px] ">
            <div className="flex h-20 w-[90%] items-center justify-center lg:w-5/6">
              <Selector
                placeholder="Select Your City"
                data="cities"
                state={city}
                setState={setCity}
              />
            </div>
          </div>
          <div className="flex h-[440px] w-full items-center justify-center ">
            {prayerTime && (
              <SwiperPrayer
                swiperRef={swiperRef}
                value={value}
                setValue={setValue}
                activePrayer={activePrayer}
                prayerTime={prayerTime}
              />
            )}
          </div>
          <div className="text-base font-extrabold tracking-normal text-gray-700 sm:tracking-wider lg:text-2xl">
            <div className="flex h-16 w-full items-center justify-center ">
              {prayerTime && (
                <div>
                  Time remaining for {nextPrayer} Azahn{" : "}
                  {nextPrayerInHours < 1
                    ? "00"
                    : nextPrayerInHours || nextPrayerInHours < 10
                    ? `0${nextPrayerInHours}`
                    : nextPrayerInHours}
                  :
                  {nextPrayerInMinutes < 10
                    ? `0${nextPrayerInMinutes}`
                    : nextPrayerInMinutes}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  else {
    return (
      <section
        id="prayer"
        className="flex h-screen w-full items-center justify-center bg-white"
      >
        <SyncIcon
          style={{ width: "36", height: "36px" }}
          className=" animate-spin text-black"
          // viewBox="0 0 24 24 "
        />
      </section>
    );
  }
};

export default PrayerSection;
