// import { stats } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const stats = [
  {
    id: "stats-1",
    title: "Contests",
    value: "1",
  },
  {
    id: "stats-2",
    title: "Gas Reports",
    value: "1",
  },
  {
    id: "stats-3",
    title: "Low Risk/QA",
    value: "1",
  },
  {
    id: "stats-3",
    title: "Med/High Risk",
    value: "1",
  },
];

const AuditStats = () => {
  return (
    <div>
      <motion.div
        whileInView={{ y: [10, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-white text-center">
          Code4rena Audit Stats
        </h1>
        <br />

        <section
          id="C4Audits"
          className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`flex-1 flex justify-start items-center flex-row m-3`}
            >
              <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                {stat.value} <br />
              </h4>
              <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                {stat.title}
              </p>
            </div>
          ))}
        </section>
      </motion.div>
    </div>
  );
};

export default AuditStats;
