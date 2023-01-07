import React from "react";
// import { projects } from "../constants";
// import { AiFillGithub } from "react-icons/ai";
// import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const blogsList = [
  {
    id: "project-1",
    title: "Common Smart Contract Security Vulnerabilities",
    link: "https://medium.com/@therahulpujari/smart-contract-security-vulnerabilities-e57f0691f294",
    content:
      "In this blog post I talk about common smart contract vulnerabilities like Reentrancy, Txorigin, front running, storage, delegatecall, overflow, underflow, seldestruct, and DoS.",
  },
  {
    id: "project-2",
    title: "Ethernaut Challenges",
    link: "https://therahulpujari.medium.com/list/ethernaut-challenges-8fc6d22534e9",
    content:
      "In this list of blogs, I go through some of the challenges of the Ethernaut CTF and give my approach and solution to those challenges.",
  },
  {
    id: "project-3",
    title: "Basics of Blockchain",
    link: "https://medium.com/@rahulpujari2919/basics-of-blockchain-13a7af77c955",
    content:
      "Blockchain Theory - protocols such as proof-of-work, proof-of-stake; liquidity pools, DEXs, Block construction, TX propagation and mempool, Nodes and clients, AMMs, lending, collateral, staking, and DeFi protocols have been discussed in this blog post",
  },
];

const Blogs = (props) => {
  return (
    <motion.div
      className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
      whileInView={{ y: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <section id="blogs">
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
          {props.link ? (
            <a href={props.link} target="_blank">
              <u>Link to Medium Blog</u>
            </a>
          ) : (
            ""
          )}
        </div>
      </section>
    </motion.div>
  );
};

const Web3Blogs = () => {
  return (
    <section id="web3blogs">
      <h1 className="flex-1 text-center font-poppins font-semibold ss:text-[45px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Web3 Blogs
      </h1>

      <div className="container px-2 py-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {blogsList.map((blog, index) => (
            <Blogs key={blog.id} index={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Web3Blogs;
