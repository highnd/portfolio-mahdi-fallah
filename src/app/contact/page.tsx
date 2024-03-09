"use client";
// icons
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

// variants
import { fadeIn } from "@/utils/motion";

import { useState } from "react";
import { DrawOutlineButton } from "@/components/CustomBtn";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const inputStyle =
    "w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent focus:bg-white/5 outline-none focus:ring-1 focus:ring-green-500 border border-sky-500 placeholder:text-white/30 placeholder:font-light md:mb-1 mb-3";

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     sendMessage(message).then(({ message, user }) => {
  //       alert({ message, user });
  //       setMessage({
  //         name: "",
  //         email: "",
  //         subject: "",
  //         message: "",
  //       });
  //     });
  //   } catch (error: any) {
  //     // toast.error("error.message");
  //     console.log(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <>
      <div className=" w-full h-full flex items-center justify-center relative z-50 text-center xl:text-left  pt-24 px-4 ">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px]  ">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", "spring", 0.2, 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="lg:text-5xl text-2xl text-center lg:mb-12 mb-8 my-4  "
          >
            Lets Get <span className="text-animated-glow">Connected . .</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", "spring", 0.4, 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            // onSubmit={handleSubmit}
            className="flex-1 flex flex-col lg:gap-6 gap-3 w-full mx-auto"
          >
            {/* group */}
            <div className="md:flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className={inputStyle + " md:mb-0 mb-6"}
                value={message.name}
                onChange={(e) =>
                  setMessage({ ...message, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="email"
                className={inputStyle + ""}
                value={message.email}
                onChange={(e) =>
                  setMessage({ ...message, email: e.target.value })
                }
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className={inputStyle}
              value={message.subject}
              onChange={(e) =>
                setMessage({ ...message, subject: e.target.value })
              }
            />
            <textarea
              placeholder="message"
              className=" w-full h-[180px] p-4  rounded-lg resize-none  capitalize bg-transparent focus:bg-white/5 outline-none focus:ring-1
             focus:ring-green-500 border border-sky-500 placeholder:text-white/30 placeholder:font-light"
              value={message.message}
              onChange={(e) =>
                setMessage({ ...message, message: e.target.value })
              }
            ></textarea>

            <DrawOutlineButton
              type="submit"
              background="bg-sky-600"
              color="bg-sky-500"
            >
              Send message
            </DrawOutlineButton>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default Contact;
