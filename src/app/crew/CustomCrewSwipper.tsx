"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import victor from "@/../public/crew/image-victor-glover.png";
import mark from "@/../public/crew/image-mark-shuttleworth.png";
import douglas from "@/../public/crew/image-douglas-hurley.png";
import ansari from "@/../public/crew/image-anousheh-ansari.png";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const crew = [
  {
    name: "Douglas Hurley",
    position: "Commander",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglas.src,
  },
  {
    name: "Mark Shuttleworth",
    position: "Mission Specialist",
    description:
      "Mark Shuttleworth is the founder and CEO of Canonical, the company behind Ubuntu. He became the first South African in space as a space tourist.",
    image: mark.src,
  },
  {
    name: "Victor Glover",
    position: "Pilot",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: victor.src,
  },
  {
    name: "Anousheh Ansari",
    position: "Flight Engineer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: ansari.src,
  },
];
export default function CustomCrewSwipper() {
  return (
    <Swiper
      autoplay
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true , bulletActiveClass: "swiper-pagination-bullet-active" , bulletClass: "swiper-pagination-bullet"}}
      spaceBetween={50}
      slidesPerView={1}
      className="w-full "
    >
      {crew.map((member) => (
        <SwiperSlide key={member.name}>
          <div className=" text-center flex flex-wrap flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between w-full">
            <div className="flex flex-col text-white lg:w-1/2 w-full text-center lg:text-start justify-center items-center lg:items-start lg:justify-start lg:px-6">
              <h3 className="lg:text-3xl text-gray-400 text-5xl font-bellefair font-bold uppercase mt-10">
                {member.position}
              </h3>
              <p className="lg:text-6xl  text-white font-barlow mb-14">
                {member.name}
              </p>
              <p className="text-[#D0D6F9] lg:text-lg font-barlow mb-10">
                {member.description}
              </p>
            </div>
            <div className="w-72 h-72 relative text-center">
              <Image
                src={member.image.toString()}
                alt={member.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
