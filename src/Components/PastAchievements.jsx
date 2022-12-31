import React from "react";
import { layout } from "../style";
import { motion } from "framer-motion";
import news1 from "../assets/news1.png";

// organisation --> ac
// experiecnes --> achievementList
// positions --> details
// title removed

const achievementList = [
  {
    ac: "ETHIndia 2022 Winner",
    link: "https://github.com/CommanderAstern/ChargeSwap",
    details: [
      {
        duration: "2nd-4th Dec, 2022",
        content: [
          {
            text: "We emerged victorious at ETHIndia, a highly esteemed web3 hackathon organized by ETHGlobal. Our team built ChargeSwap, a revolutionary battery swapping system for electric vehicles powered by blockchain technology, which secured us the top prize among the competitive field of Ethereum builders.",
            link: "https://github.com/CommanderAstern/ChargeSwap",
          },
        ],
      },
    ],
  },
  {
    ac: "HackNITP 4.0 Web3 Track Winner",
    link: "https://github.com/TheSnapFuel",
    details: [
      {
        duration: "11th - 13th Feb, 2022",
        content: [
          {
            text: "We built the snap fuel which won the HackNITP 4.0's Web3 track. We were further awarded $5000 in grants from Filecoin to bring our project, SnapFuel, to fruition. SnapFuel is a rapid ticketing marketplace that utilizes transferrable NFTs as tickets and boasts a mass selling feature. You can find our platform at thesnapfuel.com.",
            link: "https://github.com/TheSnapFuel",
          },
        ],
      },
    ],
  },
];

const Content = ({ text, link }) => {
  return (
    <div>
      <p className="font-poppins font-normal text-[14px] text-dimWhite mt-4">
        - {text} <br />
        {link ? (
          <a href={link} target="_blank">
            <u>GitHub Link</u>
          </a>
        ) : (
          ""
        )}{" "}
        <br />
      </p>
    </div>
  );
};

const ExperienceCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row items-center mb-6">
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2">
          {props.ac}
        </h4>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-6">
        {props.details.map((position, index) => (
          <li
            className={`${
              index === props.details.length - 1 ? "mb-0" : "mb-4"
            } ml-4`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {position.duration}
            </time>
            {position.content.map((info, index) => (
              <Content index={index} {...info} />
            ))}
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

const PastAchievements = () => {
  return (
    <section id="achievements" className="mb-12">
      <h1 className="flex-1 text-center font-poppins font-semibold ss:text-[45px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Past Web3 Achievements
      </h1>
      <div
        className={layout.section}
        // whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        // transition={{ duration: 0.5 }}
      >
        {/* Experience */}
        <motion.div className="flex flex-1 items-center justify-start flex-col">
          {achievementList.map((achievement, index) => (
            <ExperienceCard index={index} {...achievement} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PastAchievements;
