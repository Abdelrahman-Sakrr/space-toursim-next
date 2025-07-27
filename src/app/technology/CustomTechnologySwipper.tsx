"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import vehicle from "@/../public/technology/image-launch-vehicle-portrait.jpg";
import capsule from "@/../public/technology/image-space-capsule-portrait.jpg";
import capsule2 from "@/../public/technology/image-spaceport-portrait.jpg";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";

const crew = [
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: capsule,
  },
  {
    name: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: vehicle,
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    image: capsule2,
  },
];

export default function CustomTechnologySwipper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
  };

  const handleButtonClick = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center">
      <div className="flex lg:flex-col flex-row gap-7 justify-center items-center mb-10 lg:mb-0 lg:me-6">
        {crew.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`${
              currentIndex === index
                ? "bg-white text-black"
                : "bg-transparent border-2 text-white"
            } font-bold py-4 px-6 rounded-full cursor-pointer transition-all duration-300`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        className="w-full"
      >
        {crew.map((member) => (
          <SwiperSlide key={member.name}>
            <div className="text-center lg:ps-8 flex  flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between w-full">
              <div className="flex flex-col text-white lg:w-1/2 w-full text-center lg:text-start justify-center items-center lg:items-start lg:justify-start lg:px-6">
                <p className="uppercase text-2xl text-[#D0D6F9] font-barlow">
                  THE TERMINOLOGY…
                </p>
                <h3 className="lg:text-3xl text-white text-6xl font-bellefair font-bold uppercase my-10">
                  {member.name}
                </h3>
                <p className="text-[#D0D6F9] lg:text-lg font-barlow mb-10">
                  {member.description}
                </p>
              </div>
              <div className=" relative lg:w-[50%] xl:w-[30%] w-full p-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={800}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
