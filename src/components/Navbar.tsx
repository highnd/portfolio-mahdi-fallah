"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fadeIn } from "@/utils/motion";
import { menus } from "@/data/data";
import { MotionDiv } from "./MotionTags";

// import ContactIcons from "./contactIcons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div
        style={{ zIndex: "200" }}
        className={`fixed top-0  items-center px-4 w-full mx-auto md:flex md:pl-20  transition-all ${
          scrolled && !open ? "bg-slate-900" : "bg-transparent"
        }`}
      >
        {/* hamburger Menu & title */}
        <div className="flex items-center justify-between py-4 md:block ">
          <Link href="/">
            <h1
              onClick={() => setOpen(false)}
              className="text-3xl font-bold text-sky-500  md:px-12 px-2"
            >
              Highnd
            </h1>
          </Link>

          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative md:hidden "
            onClick={() => setOpen((prev) => !prev)}
          >
            <div
              className={`w-10 h-1 rounded transition-all origin-left bg-white   ${
                open ? " rotate-45" : "rotate-0  "
              }`}
            ></div>
            <div
              className={`w-10 h-1  rounded bg-blue-500 transition-all ${
                open ? "opacity-0" : "opacity-1"
              }`}
            ></div>
            <div
              className={`w-10 h-1 rounded transition-all origin-left bg-white ${
                open ? "-rotate-45" : "rotate-0"
              }`}
            ></div>
          </button>
        </div>

        {/* for big screen */}
        <ul className="hidden md:flex w-full justify-center  px-32 items-center gap-12 ">
          {menus.map((item) => (
            <Link
              href={item.url}
              key={item.title}
              className={`${
                item.title === "Login" ? "" : ""
              } text-blue-500 hover:text-green-500 font-bold`}
            >
              {item.title}
            </Link>
          ))}
          {/* <div className="hidden md:flex gap-4 w-1/3">
                <ContactIcons />
              </div> */}
        </ul>
      </div>

      {/* for mobile screen */}

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className={`${
          open ? "py-16  right-0" : " -right-[900px]  "
        } flex md:hidden justify-center h-screen  w-full z-[100] bg-black fixed transition-all ease-in-out duration-500 
        text-2xl  flex-col items-center `}
      >
        {menus?.map((item, idx) => (
          <MotionDiv
            key={item.title}
            variants={fadeIn(
              "left",
              "spring",
              (idx + 1) * 0.2,
              (idx + 1) * 0.2
            )}
            onClick={() => setOpen(false)}
            className={`text-white hover:text-indigo-600  my-4`}
          >
            <Link href={item.url}>{item.title}</Link>
          </MotionDiv>
        ))}
      </motion.ul>
    </nav>
  );
}
