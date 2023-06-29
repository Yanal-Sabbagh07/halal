"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Selector from "@/components/homePageComponents/prayerSection/Selector";
import { surahs } from "@/app/data/surah";
import { editions } from "@/app/data/editions";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
const QuranSection = () => {
  const [ayah, setAyah] = useState<any>("");
  const [currentAyahAudio, setCurrentAyahAudio] = useState<any>("");
  const [translation, setTranslation] = useState<any>("");
  const [edition, setEdition] = useState("de.bubenheim");
  const [surahNumber, setSurahNumber] = useState(1);
  const [ayahNumber, setAyahNumber] = useState(1);
  const [audioDuration, setAudioDuration] = useState<number>(5);
  let numberOfAyahsInSurah = surahs[surahNumber - 1].numberOfAyahs;
  const audioRef: any = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => {
    if (ayahNumber < numberOfAyahsInSurah) {
      setAyahNumber(ayahNumber + 1);
    }
    if (ayahNumber === numberOfAyahsInSurah) {
      if (surahNumber < 114) {
        setAyahNumber(1);
        setSurahNumber(surahNumber + 1);
      }
    }
  };

  const onLoadedMetadata = () => {
    setAudioDuration(audioRef.current.duration);
  };

  const handleOnplaying = () => {
    setIsPlaying(true);
  };
  const handlePlay = () => {
    // setIsPlaying(!isPlaying);
    setIsPlaying((prev) => !prev);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    // const surahUrl = `https://api.alquran.cloud/v1/surah/${city}/ar.hilali`;
    const baseURL = `https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/ar.alafasy`;
    const transURL = `https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/${edition}`;

    axios.get(baseURL).then((response) => {
      setAyah(response.data);
      setCurrentAyahAudio(response.data.data.audio);
    });

    axios.get(transURL).then((response) => {
      setTranslation(response.data);
    });

    // if (isPlaying && isFinite(audioDuration)) {
    //   const delay = audioDuration * 1000;
    //   console.log("Delay Value : " + delay);

    //     const interval = setInterval(() => {
    //       if (ayahNumber < numberOfAyahsInSurah) {
    //         setAyahNumber(ayahNumber + 1);

    //       }
    //     }, delay);
    //     return () => {
    //       clearInterval(interval);
    //     };
    //   }
    //
  }, [surahNumber, ayahNumber, edition]);

  if (!ayah || !translation) {
    return null;
  }

  if (ayah && translation) {
    return (
      <section
        id="Quran"
        className="min-h-full w-full overflow-x-hidden bg-gray-900 lg:bg-gray-950"
      >
        <div className="mt-2 flex min-h-[calc(100vh-64px)] w-full flex-col items-center text-center lg:mt-16">
          <div className="flex w-full flex-col items-center ">
            <div
              className="mb-1 mt-10 flex w-full flex-col items-center justify-center  gap-4 sm:mb-1 sm:mt-4 
            sm:h-20 sm:w-[95%]  sm:flex-row sm:items-center sm:justify-evenly sm:gap-0 md:w-[80%]"
            >
              <div className="w-[95%] sm:w-[30%]">
                <div className="mb-2 w-full sm:mb-0 sm:w-[95%] ">
                  <Selector
                    data="editions"
                    placeholder="Select Language"
                    state={edition}
                    setState={setEdition}
                    type={editions}
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
                    setAyahNumber={setAyahNumber}
                    type={surahs}
                  />
                </div>
                <div className="mb-2 w-[48%] sm:mb-0 sm:w-[49%]">
                  <Selector
                    data="ayat"
                    placeholder="Select Ayah"
                    state={ayahNumber}
                    setState={setAyahNumber}
                    selected={surahNumber}
                    numberOfAyahsInSurah={numberOfAyahsInSurah}
                  />
                </div>
              </div>
            </div>

            <div className="mb-2 flex min-h-full w-full items-center justify-center gap-1 sm:min-h-[550px] lg:mb-4">
              <div className="mb-2 flex min-h-[420px] w-[95%] flex-col items-center justify-normal gap-3 rounded-md bg-slate-300 sm:mb-0 sm:min-h-[550px] sm:rounded-lg md:w-[80%] lg:w-[40%]">
                <p className="mt-2 ">
                  {translation.data.surah.englishNameTranslation}
                  <span className=""></span>
                </p>
                <p className="w-[98%] sm:w-[95%]">{translation.data.text}</p>
              </div>

              <div className=" hidden  min-h-[550px] w-[40%]  flex-col items-center justify-normal gap-3 rounded-lg bg-slate-300 lg:flex">
                <p className="mt-2">{ayah.data.surah.name}</p>
                <p className="mb-2 w-[95%] sm:mb-0 ">{ayah.data.text}</p>
              </div>
            </div>
          </div>
          {/* <div className="mb-2 flex h-16  w-[95%] items-center justify-center gap-2 rounded-full border-4 border-white pl-2  pr-2  md:w-[80%]"> */}

          <audio
            src={currentAyahAudio}
            // onTimeUpdate={onPlaying}
            // controls
            ref={audioRef}
            // onLoad={() => setAudioDuration(audioRef.current.duration)}
            // onLoadedMetadata={onLoadedMetadata}
            // onPlay={handleOnPlay}
            // onEnded={handleEnded}
            // onPlaying={handlePlaying}
            // onPause={() => props.setAutomatic(false)}
            autoPlay
            onLoadedMetadata={onLoadedMetadata}
            onEnded={handleNext}
            onPlaying={handleOnplaying}
            preload="metadata"
          />
          <button onClick={handlePlay} className="mb-4">
            {isPlaying ? (
              <div className="flex w-28 items-center justify-center rounded-full border-2 bg-red-500">
                <PauseIcon className=" p-1 text-[42px] text-white" />
              </div>
            ) : (
              <div className="flex w-28 items-center justify-center rounded-full border-2 bg-green-500">
                <PlayArrowIcon className=" p-1 text-[42px] text-white" />
              </div>
            )}
          </button>

          {/* current time  */}

          {/* <div className="text-white">0:00</div> */}

          {/* progerss bar */}

          {/* <input
              type="range"
              className="transparent relative h-4 w-full appearance-none rounded-lg border-transparent bg-neutral-200
              outline-none"
            /> */}
          {/* Duration */}
          {/* <div className="text-white">0:{Math.floor(audioDuration)}</div> */}
        </div>
        {/* </div> */}
      </section>
    );
  } else {
    return <div>Loading....</div>;
  }
};

export default QuranSection;
