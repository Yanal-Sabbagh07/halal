import HeroSection from "@/components/homePageComponents/heroSection/HeroSection";
import PrayerSection from "@/components/homePageComponents/prayerSection/PrayerSection";
import QuranSection from "@/components/homePageComponents/quranSection/QuranSection";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between overflow-x-hidden bg-gray-900">
      <HeroSection />
      <PrayerSection />
      <QuranSection />
    </main>
  );
}
