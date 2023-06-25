import HeroSection from "@/components/homePageComponents/heroSection/HeroSection";
import PrayerSection from "@/components/homePageComponents/prayerSection/PrayerSection";

export default function Home() {
  return (
    <main className="flex  flex-col  items-center justify-between	 bg-gray-900  ">
      <HeroSection />
      <PrayerSection />
    </main>
  );
}
