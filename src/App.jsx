import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  AuditStats,
  Footer,
  Projects,
  SkillsAndTools,
  PastAchievements,
  Web3Blogs,
} from "./Components";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX} `}>
      <div className={`${styles.boxWidth}`}>
        <AuditStats />
        <PastAchievements />
        <Web3Blogs />
        <Projects />
        {/* <SkillsAndTools /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
