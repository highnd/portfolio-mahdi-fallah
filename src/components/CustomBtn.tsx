"use client";
import React, { useEffect, useRef } from "react";

import { MdArrowOutward } from "react-icons/md";
import { MotionBtn } from "./MotionTags";
export const SpotlightButton = () => {
  const btnRef = useRef<any>(null);
  const spanRef = useRef<any>(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef?.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef?.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current?.addEventListener("mousemove", handleMouseMove);
    btnRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current?.removeEventListener("mousemove", handleMouseMove);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <MotionBtn
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs  overflow-hidden rounded-lg
        bg-gradient-to-r from-orange-500 via-red-500 to-purple-700 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 ">Adjusting</span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%]
           -translate-y-[50%] rounded-full bg-gradient-to-r from-lime-500 to-cyan-600"
      />
    </MotionBtn>
  );
};

export const DrawOutlineButton = ({
  children,
  color,
  background,
  glow,
  ...rest
}: any) => {
  return (
    <button
      {...rest}
      className={`group relative px-4 py-3 font-medium text-slate-100 transition-colors 
        duration-[300ms] ${background} hover:bg-transparent hover:text-white`}
    >
      <span className={`tracking-widest ${glow && "text-glow"}`}>
        {children}
      </span>

      {/* TOP */}
      <span
        className={`absolute left-0 top-0 h-[2px] w-0 ${color} transition-all duration-300 group-hover:w-full`}
      />

      {/* RIGHT */}
      <span
        className={`absolute right-0 top-0 h-0 w-[2px] ${color} transition-all delay-100 duration-300 group-hover:h-full`}
      />

      {/* BOTTOM */}
      <span
        className={`absolute bottom-0 right-0 h-[2px] w-0 ${color} transition-all delay-200 duration-300 group-hover:w-full`}
      />

      {/* LEFT */}
      <span
        className={`absolute bottom-0 left-0 h-0 w-[2px] ${color} transition-all delay-300 duration-300 group-hover:h-full`}
      />
    </button>
  );
};

type FbAnimateButtonProp = {
  children: any;
  className?: string;
  showIcon?: boolean;
};

export const FbAnimateButton = ({
  children,
  className,
  showIcon,
  ...rest
}: FbAnimateButtonProp) => {
  return (
    <button
      {...rest}
      className={`group relative flex  items-center justify-center overflow-hidden rounded-md border-2 
       bg-blue-800  px-4 py-3 font-bold transition-transform ease-out  hover:scale-105 ${className}`}
    >
      <span
        className={`absolute inset-0 z-0 h-full translate-y-12  bg-gradient-to-r
          from-blue-500 to-slate-900 transition-transform  duration-300 ease-in-out 
             group-hover:translate-y-0  `}
      ></span>

      <span className="relative flex items-center justify-center gap-2 group-hover:text-white ">
        {children} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </button>
  );
};
