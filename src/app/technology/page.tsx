import Image from "next/image";
import React from "react";
import desktopBg from "@/../public/technology/background-technology-desktop.jpg";
import mobileBg from "@/../public/technology/background-technology-mobile.jpg";
import CustomTechnologySwipper from "./CustomTechnologySwipper";

export default function page() {
  return (
    <section className="font-sans w-full min-h-screen lg:overflow-hidden">
      <div className="pt-36 lg:h-screen w-full relative flex flex-wrap justify-center items-center">
        <Image
          src={desktopBg}
          alt="Home Background"
          className="lg:absolute lg:inset-0 lg:object-cover lg:w-full lg:h-screen lg:block -z-10 hidden"
          fill
        />
        <Image
          src={mobileBg}
          alt="Home Background"
          className="absolute inset-0 object-cover w-full h-screen -z-10 lg:hidden"
          fill
        />
        <div className="md:w-8/12 w-11/12 flex flex-col md:items-start md:justify-start items-center justify-center">
          <p className="text-white px-6 font-barlow tracking-widest uppercase text-3xl mb-20">
            <span className="opacity-50">03</span> space launch 101
          </p>
          <div className="w-full flex justify-center">
            <CustomTechnologySwipper />
          </div>
        </div>
      </div>
    </section>
  );
}
