import React from "react";
// import { projects } from "../constants";
// import { AiFillGithub } from "react-icons/ai";
// import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const projectsList = [
  {
    id: "project-1",
    title: "The Snap Fuel",
    github: "https://github.com/TheSnapFuel",
    link: "https://thesnapfuel.com/",
    content: "This project was a hackathon project in which we made a NFT Ticketing marketplace system with the feature of mass ticketing. This project is meant to replace current ticketing with this modern, quick ticketing system.",
  },
  {
    id: "project-2",
    title: "ChargeSwap",
    github: "https://github.com/CommanderAstern/ChargeSwap",
    link: "",
    content: "ChargeSwap is a new way to manage your Electric Vehicles. For vehicles that use battery swapping, we made a system that helps in managing the battery details and payments through blockchain while IoT helps in managing the communications between the batteries and the station itself. ChargeSwap was a project built at ETHIndia 2022 and is one of the top 12 winning projects along with winning multiple other tracks.",
  },
  {
    id: "project-3",
    title: "Token Vendor",
    github: "https://goerli.etherscan.io/address/0xBCAeA7B15a984973Fa283dA01d43aF6Ec2cefd99#code",
    link: "https://royal-rock.surge.sh/",
    content:
      "Decentralized token vendor through which one can buy and sell tokens, created cryptocurrency called 'theweekndcoin' - done as a challenge from Scaffold-Eth",
  },
  {
    id: "project-4",
    title: "Group Funding Staker Ethereum",
    github: "https://goerli.etherscan.io/address/0xf6BCDaFf77A1829de4eE60fb813F379ea7b8ae6B#code",
    link: "http://sordid-card.surge.sh/",
    content:
      "This is a decentrazlied staker smart contract made using Scaffold Eth's challenges. Deployed on Goerli Testnet for you to use and check out!",
  },
];

const Project = (props) => {
  return (
    <motion.div
      className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
      whileInView={{ y: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold font-poppins text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient">
            {props.title}
          </h1>

          <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            <div className="flex sm:flex-row"></div>
          </p>
        </div>
      </div>

      <p className="mt-8 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 font-poppins">
        {props.content}
      </p>

      <div className="flex -mx-2 mt-8 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 font-poppins">
        {props.github ? (
          <a href={props.github} target="_blank">
            <u>Link to code</u>
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="flex -mx-2 mt-8 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 font-poppins">
        {props.link ? (
          <a href={props.link} target="_blank">
            <u>Deployed Link</u>
          </a>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="flex-1 text-center font-poppins font-semibold ss:text-[45px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Web3 Projects
      </h1>

      <div className="container px-2 py-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {projectsList.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
