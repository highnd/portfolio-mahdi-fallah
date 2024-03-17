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
        <h1
          className=" flex items-center justify-center text-6xl font-bold  pt-28 bg-clip-text bg-gradient-to-t
         from-cyan-600 via-rose-400 to-cyan-600 text-transparent "
        >
          My Works
        </h1>
        <div className="sticky top-0 flex h-screen gap-4 items-start pt-24 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="  flex items-center justify-center " />
            {works.map((item) => (
              <div
                className={`h-max md:w-[60vw] sm:w-screen w-[120vw]  flex items-end pb-12  justify-center `}
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
                      Demo
                    </DrawOutlineButton>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
