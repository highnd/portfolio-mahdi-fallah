import { PinContainer } from "@/components/3DPin";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import ContactIconsList from "@/components/ContactIconsList";
import { DrawOutlineButton, FbAnimateButton } from "@/components/CustomBtn";
import { MotionDiv } from "@/components/MotionTags";

import { fadeIn } from "@/utils/motion";

export default function Home() {
  return (
    <main className="">
      <MotionDiv
        className="min-h-screen h-screen relative z-[20] lg:overflow-hidden md:pt-0 pt-8"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <MotionDiv
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="h-full grid lg:grid-cols-2 grid-cols-1  px-6 xl:px-36 items-center"
        >
          {/* card CONTAINER */}
          <MotionDiv
            variants={fadeIn("up", "tween", 0.2, 0.6)}
            className=" relative flex items-center justify-center  lg:h-[100%] h-[24rem] lg:mt-4 my-8 md:order-2 overflow-hidden"
          >
            <PinContainer title="github" href="https://github.com/highnd">
              <div
                className="flex flex-col p-4 tracking-tight text-slate-100/50 
              md:w-[20rem] w-[17rem] md:h-[20rem] h-[20rem] "
              >
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Mahdi Fallah
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Full Stack Web Developer Working on Unique Deign
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-blue-200 to-blue-500" />
              </div>
            </PinContainer>
          </MotionDiv>

          {/* TEXT CONTAINER */}
          <MotionDiv
            variants={fadeIn("up", "tween", 0.2, 1)}
            className=" flex flex-col gap-4  md:order-1 py-6 text-left  "
          >
            {/* <TypewriterEffectSmooth words={words} /> */}
            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-bold  text-[#c5e8f3]">
              Crafting Digital Experiences, Designing Tomorrow
            </h1>
            <p className="lg:my-0 my-1 text-4xl md:text-5xl font-bold  text-[#c5e8f3] flex items-center ">
              𓆝 𓆟 𓆞 𓆝 𓆟
            </p>
            <ContactIconsList />
            {/* DESC */}
            <p className="md:text-xl text-white">
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for aesthetics and a mastery of code, my
              portfolio showcases a diverse collection of projects that reflect
              my commitment to excellence.
            </p>
            {/* BUTTONS */}
            <div className="w-full flex gap-4 ">
              {/* <FbAnimateButton>View My Work</FbAnimateButton> */}
              <DrawOutlineButton background="bg-green-600" color="bg-green-400">
                View My Work
              </DrawOutlineButton>
              <DrawOutlineButton background="bg-sky-700" color="bg-sky-400">
                Contact Me
              </DrawOutlineButton>
            </div>
          </MotionDiv>
        </MotionDiv>
      </MotionDiv>
      <BackgroundBeams />
    </main>
  );
}
