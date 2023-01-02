import React from "react";
// import {
//   AiOutlineInstagram,
//   AiFillTwitterCircle,
//   AiFillLinkedin,
//   AiFillGithub,
// } from "react-icons/Ai";
// import { socialMedia } from "../constants";
// import { profilePic } from "../assets";
import { layout } from "../style";

const socialMedia = [
  {
    id: "social-media-1",
    // icon: AiOutlineInstagram,
    link: "https://www.instagram.com/therahulpujari",
  },
  {
    id: "social-media-3",
    // icon: AiFillTwitterCircle,
    link: "https://www.twitter.com/therahulpujari",
  },
  {
    id: "social-media-4",
    // icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/saileelarahulpujari/",
  },
  {
    id: "social-media-4",
    // icon: AiFillGithub,
    link: "https://www.github.com/emperorrp",
  },
];

const Footer = () => (
  <footer id="contact" className="bg-gray-900 w-100">
    <div className={layout.sectionReverse}>
      <div className={`px-6 ${layout.sectionInfo} md:ml-16`}>
        <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          Rahul Pujari
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          Web3 Enthusiast, Smart contract developer who is dabbling in smart
          contract security.
        </p>
        {/* <div className="flex flex-row mt-4">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div> */}
        <p
          className={`font-poppins font-normal text-dimWhite text-[12px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          Made with 💚 and ⚡ on React JS
        </p>
      </div>
      {/* <img src="./assets/rahulLogo.svg" alt="logo"></img> */}
    </div>
  </footer>
);

export default Footer;
