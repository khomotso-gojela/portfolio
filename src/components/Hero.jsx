import { motion } from "framer-motion"

import { styles } from "../style"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section 
      className="relative w-full h- h-screen mx-auto"
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 
        mx-auto flex flex-row items-start gap-5`}>
          {/* <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#2991b1]"/>
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-400 "/>
          </div> */}
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-[#2991b1]">Khomotso</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}> I test and develop softwares.</p>
          </div>

      </div>
          
    </section>
  );
};

export default Hero;