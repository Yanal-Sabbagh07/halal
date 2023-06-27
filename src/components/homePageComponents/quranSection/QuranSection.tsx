"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Selector from "@/components/homePageComponents/prayerSection/Selector";
import QuranSelection from "./QuranSelection";
const QuranSection = () => {
  const [ayah, setAyah] = useState<any>("");
  const [translation, setTranslation] = useState<any>("");
  const [edition, setEdition] = useState("de.bubenheim");
  const [surahNumber, setSurahNumber] = useState("1");
  const [ayahNumber, setAyahNumber] = useState("1");

  useEffect(() => {
    // const surahUrl = `https://api.alquran.cloud/v1/surah/${city}/ar.hilali`;
    const baseURL = `https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/ar.alafasy`;
    const transURL = `https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/${edition}`;
    axios.get(baseURL).then((response) => {
      setAyah(response.data);
    });

    axios.get(transURL).then((response) => {
      setTranslation(response.data);
    });
  }, [surahNumber, ayahNumber, edition]);

  if (!ayah || !translation) {
    return null;
  }

  if (ayah || translation)
    return (
      <section
        id="Quran"
        className="min-h-full w-full overflow-x-hidden bg-gray-900"
      >
        <div className="mt-2 flex min-h-[calc(100vh-64px)] w-full flex-col items-center text-center lg:mt-16">
          <div className="flex w-full flex-col items-center ">
            <div
              className="mb-4 mt-5 flex w-full flex-col items-center justify-center  gap-4 sm:mb-8 sm:mt-8 
            sm:h-20 sm:w-[95%]  sm:flex-row sm:items-center sm:justify-evenly sm:gap-0 md:w-[80%]"
            >
              <div className="w-[95%] sm:w-[30%]">
                <div className="mb-2 w-full sm:mb-0 sm:w-[95%] ">
                  <Selector
                    data="editions"
                    placeholder="Select Language"
                    state={edition}
                    setState={setEdition}
                  />
                </div>
              </div>
              <div className="flex w-[95%] items-center justify-between  sm:w-[70%] sm:justify-between">
                <div className="mb-2 w-[48%] sm:mb-0 sm:w-[49%]">
                  <Selector
                    data="surahs"
                    placeholder="Select Surah"
                    state={surahNumber}
                    setState={setSurahNumber}
                  />
                </div>
                <div className="mb-2 w-[48%] sm:mb-0 sm:w-[49%]">
                  <Selector
                    data="ayat"
                    placeholder="Select Ayah"
                    state={ayahNumber}
                    setState={setAyahNumber}
                    selected={surahNumber}
                  />
                </div>
              </div>
            </div>

            <div className="mb-8 flex min-h-full w-full items-center justify-center gap-1 sm:min-h-[550px]">
              <div className="mb-2 flex min-h-[420px] w-[95%] flex-col items-center justify-normal gap-3 rounded-md bg-gray-300 sm:mb-0 sm:min-h-[550px] sm:rounded-lg md:w-[80%] lg:w-[40%]">
                <p className="mt-2 ">
                  {translation.data.surah.englishNameTranslation}
                  <span className=""></span>
                </p>
                <p className="w-[98%] sm:w-[95%]">{translation.data.text}</p>
              </div>

              <div className=" hidden  min-h-[550px] w-[40%]  flex-col items-center justify-normal gap-3 rounded-lg bg-gray-300 lg:flex">
                <p className="mt-2">{ayah.data.surah.name}</p>
                <p className="mb-2 w-[95%] sm:mb-0 ">{ayah.data.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default QuranSection;
