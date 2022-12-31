import React from "react";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";

// const features = [
//   {
//     id: "feature-1",
//     icon: star,
//     title: "Rewards",
//     content:
//       "The best credit cards offer some tantalizing combinations of promotions and prizes",
//   },
//   {
//     id: "feature-2",
//     icon: shield,
//     title: "100% Secured",
//     content:
//       "We take proactive steps make sure your information and transactions are secure.",
//   },
//   {
//     id: "feature-3",
//     icon: send,
//     title: "Balance Transfer",
//     content:
//       "A balance transfer credit card can save you a lot of money in interest charges.",
//   },
// ];

const SkillsAndTools = () => {
  return (
    <div id="skills">
      <h1 className="flex-1  justify-center text-center font-poppins font-semibold ss:text-[45px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Skills and Tools
      </h1>
      <div className="flex text-center">
        <h3 className="flex-1 inline-flex font-poppins  ss:text-[25px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
          Design
          <FaFigma /> <FaReact /> <SiSolidity /> <SiAdobepremierepro />
        </h3>
      </div>
    </div>
  );
};

export default SkillsAndTools;
