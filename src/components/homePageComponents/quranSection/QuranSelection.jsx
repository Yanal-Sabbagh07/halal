import React from "react";
import Selector from "@/components/homePageComponents/prayerSection/Selector";

const QuranSelection = () => {
  return (
    <div className="mb-8 mt-8 hidden h-20 w-full flex-wrap items-center justify-evenly sm:flex ">
      <div className="w-1/5">
        <Selector
          data="editions"
          placeholder="Select Language"
          state={edition}
          setState={setEdition}
        />
      </div>
      <div className="w-1/5">
        <Selector
          data="surahs"
          placeholder="Select Surah"
          state={surahNumber}
          setState={setSurahNumber}
        />
      </div>
      <div className="w-1/5">
        <Selector
          data="ayat"
          placeholder="Select Ayah"
          state={ayahNumber}
          setState={setAyahNumber}
          selected={surahNumber}
        />
      </div>
    </div>
  );
};

export default QuranSelection;
