import Title from "@/components/heroSection/Title";
import HeroBackground from "@/components/heroSection/HeroBackground";
import Links from "@/components/heroSection/Links";
import HeroSection from "@/components/heroSection/HeroSection";
import PrayerSection from "@/components/prayerSection/PrayerSection";
// import { useSession } from "next-auth/react";

export default function Home() {
  // const session = useSession();
  // console.log(session);
  return (
    <main className="flex  flex-col  items-center justify-between	 bg-gray-900 ">
      <HeroSection />
      <PrayerSection />
    </main>
  );
}
