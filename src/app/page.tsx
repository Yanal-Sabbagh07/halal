import Image from "next/image";
import Title from "@/components/heroSection/Title";
import HeroHome from "@/components/heroSection/HeroHome";
import Links from "@/components/heroSection/Links";
export default function Home() {
  return (
    <main className=" flex bg-slate-900  flex-col items-center justify-between">
      <section className="mt-16 overflow-x-hidden">
        <div
          className="w-[calc(100vw-36px)] sm:w-[calc(100vw-80px)] md:w-[calc(100vw-112px)] h-[calc(100svh-64px)] 
          flex flex-col items-center justify-evenly 
            lg:hidden"
        >
          <Title />
          <HeroHome />
          <Links />
        </div>
        <div className="hidden lg:flex w-screen h-[calc(100vh-64px)] bg-hero-descktop bg-center bg-cover ">
          <div className="flex flex-col w-3/4 h-full items-start justify-center">
            <div className="flex items-center justify-start h-64 ">
              <Title />
            </div>
            <div className="flex items-start justify-start  w-full ">
              <Links />
            </div>
          </div>
          <div className="flex w-[620px] h-full items-center justify-center  2xl:w-[750px]">
            <HeroHome />
          </div>
        </div>
      </section>
    </main>
  );
}
