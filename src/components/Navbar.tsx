"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/../../public/shared/logo.svg";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const links = [
    { href: "/", label: "Home", id: "00" },
    { href: "/destination", label: "Destination", id: "01" },
    { href: "/crew", label: "Crew", id: "02" },
    { href: "/technology", label: "Technology", id: "03" },
  ];
  return (
    <nav className="flex items-center relative lg:absolute  top-1 tracking-widest    font-barlow right-0 left-0 lg:justify-around justify-between px-10 lg:px-5 p-4 text-white mt-5">
      <Image
        src={logo}
        alt="logo image"
        width={50}
        height={50}
        className="text-lg font-bold"
      />
      <ul
        className="hidden lg:flex lg:space-x-4 lg:relative lg:bg-gradient-to-r lg:from-[#242935]/[20%] lg:to-[#2A3C55]/[80%] lg:backdrop-blur-3xl lg:py-4 lg:px-10
  before:content-[''] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:w-full before:h-[0.0625rem] before:bg-white before:opacity-40"
      >
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>
              <span className="font-bold">{link.id}</span> {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="lg:hidden text-white z-10"
        onClick={() => setisOpen(!isOpen)}
      >
        Menu
      </button>
      <ul
        className={`lg:hidden fixed top-0 right-0 h-screen w-2/3 bg-gradient-to-b from-[#242935]/[20%] to-[#2A3C55]/[80%] backdrop-blur-2xl z-20 py-10 px-5 rounded-md shadow-lg
    transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
  `}
      >
        <p
          onClick={() => setisOpen(false)}
          className="font-bold mb-10 text-2xl text-end w-full"
        >
          Close
        </p>
        {links.map((link) => (
          <li key={link.id} className="pb-5">
            <Link href={link.href} onClick={() => setisOpen(false)}>
              <span className="font-bold">{link.id}</span> {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
