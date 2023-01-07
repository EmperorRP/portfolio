import styles from "../style";
import rahul from "../assets/rahul.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className={`relative flex md:flex-row flex-col z-[5] ${styles.paddingY}`}
    >
      <div className="flex flex-row  w-screen justify-center">
        <motion.div
          whileInView={{ x: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white">
              Hello, I am <br />
              <span className="text-gradient ">Rahul Pujari</span>.{" "}
            </h1>

            <p className={`${styles.paragraph} max-w-[470px]`}>
              I am a Web3 developer and UI designer with a strong desire to
              create amazing projects using blockchain. I aspire to be a
              <b className="text-white"> Solidity Security Engineer</b> and hone
              my skills in blockchain to make a meaningful impact in this
              industry.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex flex-row  w-screen justify-center"
        whileInView={{ x: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <img
          src={rahul}
          alt="landingimage"
          className="relative z-index-[5] h-[100%]"
        />
      </motion.div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 `}>
        <div className="absolute z-[-5] w-[40%] h-[35%] top-0 blue__gradient"></div>
        <div className="absolute z-[-5] w-[100%] h-[35%] top-0 pink__gradient"></div>
        <div className={`ss:hidden ${styles.flexCenter}`}></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
