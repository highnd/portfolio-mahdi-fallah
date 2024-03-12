"use client";
import { DrawOutlineButton } from "@/components/CustomBtn";
import { works } from "@/data/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef<any>();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className=" flex items-center justify-center text-8xl text-center pt-24">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen  flex items-center justify-center " />
            {works.map((item) => (
              <div
                className={`h-screen w-screen  flex items-end pb-12 justify-center `}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white  justify-center items-center">
                  <h1 className="text-xl font-bold md:text-4xl ">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[300px] xl:w-[600px] xl:h-[300px] ">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] text-center">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-center">
                    <DrawOutlineButton
                      background="bg-sky-700"
                      color="bg-sky-400"
                    >
                      Contact Me
                    </DrawOutlineButton>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Portfolio;
