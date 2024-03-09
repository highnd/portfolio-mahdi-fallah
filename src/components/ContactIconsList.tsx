import React from "react";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const ContactIconsList = () => {
  return (
    <div className="flex gap-3 text-xl">
      <FaGithub className="cursor-pointer text-white" />
      <SiGmail className="cursor-pointer text-yellow-500" />
      <FaPhoneFlip className="cursor-pointer text-green-500" />
      <FaTelegram className="cursor-pointer text-sky-500" />
      <FaLinkedin className="cursor-pointer text-blue-500" />
      <IoLogoInstagram className="cursor-pointer text-purple-500" />
    </div>
  );
};

export default ContactIconsList;
