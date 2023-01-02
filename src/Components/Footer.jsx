import React from "react";
// import {
//   githubLogo,
//   twitterLogo,
//   linkedinLogo,
//   instagramLogo,
// } from "./assets/icons";
import githubLogo from "../assets/icons/githubLogo.svg";
import twitterLogo from "../assets/icons/twitterLogo.svg";
import linkedinLogo from "../assets/icons/linkedinLogo.svg";
import instagramLogo from "../assets/icons/instagramLogo.svg";
import { layout } from "../style";

const socialMedia = [
  {
    id: "social-media-1",
    icon: githubLogo,
    link: "https://www.github.com/emperorrp",
  },
  {
    id: "social-media-2",
    icon: twitterLogo,
    link: "https://www.twitter.com/therahulpujari",
  },
  {
    id: "social-media-3",
    icon: linkedinLogo,
    link: "https://www.linkedin.com/in/saileelarahulpujari/",
  },

  {
    id: "social-media-4",
    icon: instagramLogo,
    link: "https://www.instagram.com/therahulpujari",
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
          Looking for opportunities in Smart Contract Security. Connect with me
          on socials:
        </p>
        <div className="flex flex-row mt-4">
          {socialMedia.map((social, index) => (
            <a href={social.link}>
              <img
                target="_blank"
                key={social.id}
                index={index}
                className="text-white mr-5 text-[25px] hover:text-teal-200 w-8"
                src={social.icon}
              ></img>
            </a>
          ))}
        </div>
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
