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
      <FaGithub className="cursor-pointer hover:text-green-500" />
      <SiGmail className="cursor-pointer hover:text-green-500" />
      <FaPhoneFlip className="cursor-pointer hover:text-green-500" />
      <FaTelegram className="cursor-pointer hover:text-green-500" />
      <FaLinkedin className="cursor-pointer hover:text-green-500" />
      <IoLogoInstagram className="cursor-pointer hover:text-green-500" />
    </div>
  );
};

export default ContactIconsList;
