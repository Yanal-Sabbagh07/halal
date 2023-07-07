import HeroSection from "./heroSection/HeroSection";
import PrayerSection from "./prayerSection/PrayerSection";
import QuranSection from "./quranSection/QuranSection";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between overflow-x-hidden bg-gray-900">
      <HeroSection />
      <PrayerSection />
      <QuranSection />
    </main>
  );
}
