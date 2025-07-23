"use client";
import Image from "next/image";
import React, { useState } from "react";
import moonImg from "@/../public/destination/image-moon.png";
import marsImg from "@/../public/destination/image-mars.png";
import europaImg from "@/../public/destination/image-europa.png";
import titanImg from "@/../public/destination/image-titan.png";
import desktopBg from "@/../public/destination/background-destination-desktop.jpg";
import mobileBg from "@/../public/destination/background-destination-mobile.jpg";

export default function Destinations() {
  const [currentDestination, setcurrentDestination] = useState("Moon");
  const destination = [
    {
      name: "Moon",
      image: moonImg,
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      image: marsImg,
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      image: europaImg,
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      image: titanImg,
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ];
  const filteredDestination = destination.filter(
    (dest) => dest.name === currentDestination
  );
  return (
    <>
      <div className="flex lg:pt-52 pt-40  lg:flex-row flex-col row-start-2 lg:justify-center  lg:items-start sm:items-start lg:h-screen w-full relative">
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
        <div className="flex flex-col lg:w-1/2 w-full text-center lg:justify-start justify-center items-center lg:ps-16">
          <p className="text-white font-barlow text-start tracking-widest uppercase text-2xl mb-10">
            <span className="opacity-50">01</span> Pick Your Destination
          </p>
          <Image
            key={filteredDestination[0]?.name}
            width={400}
            height={400}
            className="animate-fade-in-scale"
            src={filteredDestination[0]?.image ?? moonImg}
            alt={filteredDestination[0]?.name}
          />
        </div>
        <div className="flex flex-col lg:w-1/2 w-full text-center lg:text-start justify-center items-center lg:items-start lg:justify-start lg:p-8">
          <ul className="text-white flex justify-between  gap-4 font-barlow tracking-widest uppercase text-2xl mb-4">
            {destination.map((dest, index) => (
              <li
                key={index}
                onClick={() => setcurrentDestination(dest.name)}
                className={`cursor-pointer ${
                  currentDestination === dest.name ? "opacity-50" : ""
                }`}
              >
                {dest.name}
              </li>
            ))}
          </ul>
          {filteredDestination.map((dest, index) => (
            <div key={index} className="flex flex-col p-5 text-white ">
              <h3 className="lg:text-9xl text-5xl font-bellefair font-bold uppercase my-10">
                {dest.name}
              </h3>
              <p className="lg:text-lg font-barlow opacity-50">
                {dest.description}
              </p>
              <div className="flex justify-start gap-20 mt-5">
                <p className="text-lg font-barlow">
                  <span className="font-bold opacity-50">Distance:</span>{" "}
                  {dest.distance}
                </p>
                <p className="text-lg font-barlow justify-center">
                  <span className="font-bold opacity-50">Travel Time:</span>{" "}
                  {dest.travel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
