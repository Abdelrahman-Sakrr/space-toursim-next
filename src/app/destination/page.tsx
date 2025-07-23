import Image from "next/image";
import React from "react";
import desktopBg from "@/../public/destination/background-destination-desktop.jpg";
import mobileBg from "@/../public/destination/background-destination-mobile.jpg";

export default function page() {
  return (
    <section className="font-sans w-full min-h-screen ">
      <div className="flex flex-col row-start-2 items-center sm:items-start lg:h-screen w-full">
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
      </div>
    </section>
  );
}
