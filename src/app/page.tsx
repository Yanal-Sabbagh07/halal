"use client";
import Title from "@/components/heroSection/Title";
import HeroHome from "@/components/heroSection/HeroHome";
import Links from "@/components/heroSection/Links";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <main className=" flex flex-col  items-center justify-between bg-gray-950">
      <section className="mt-16 overflow-x-hidden">
        <div
          className="flex h-[calc(100svh-64px)] w-[calc(100vw-36px)] flex-col 
          items-center justify-evenly sm:w-[calc(100vw-80px)] md:w-[calc(100vw-112px)] 
            lg:hidden"
        >
          <Title />
          <HeroHome />
          <Links />
        </div>
        <div className="hidden h-[calc(100vh-64px)] w-full bg-hero-dark-gray bg-cover bg-center lg:flex ">
          <div className="flex h-full w-3/4 flex-col items-start justify-center">
            <div className="flex h-64 items-center justify-start ">
              <Title />
            </div>
            <div className="flex w-full items-start  justify-start ">
              <Links />
            </div>
          </div>
          <div className="flex h-full w-[620px] items-center justify-center  2xl:w-[750px]">
            <HeroHome />
          </div>
        </div>
      </section>
    </main>
  );
}
